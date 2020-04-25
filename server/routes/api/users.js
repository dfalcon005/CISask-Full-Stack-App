const express = require('express')
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require('cors')
const mongoose = require('mongoose')
const router = express.Router()
const auth = require('../../middleware/auth')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//get User model
const User = require("../../models/user");
router.use(cors())


router.post(
  "/signup",
  [
      check("username", "Please Enter a Valid Username")
      .not()
      .isEmpty(),
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
          min: 6
      })
  ],
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({
              errors: errors.array()
          });
      }

      const {
          username,
          email,
          password
      } = req.body;
      try {
          let user = await User.findOne({
              email
          });
          if (user) {
              return res.status(400).json({
                  msg: "User Already Exists"
              });
          }

          user = new User({
              username,
              email,
              password
          });

          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);

          await user.save();

          const payload = {
              user: {
                  id: user.id
              }
          };

          jwt.sign(
              payload,
              "randomString", {
                  expiresIn: 10000
              },
              (err, token) => {
                  if (err) throw err;
                  res.status(200).json({
                      token
                  });
              }
          );
      } catch (err) {
          console.log(err.message);
          res.status(500).send("Error in Saving");
      }
  }
);

//Login with user
router.post(
    "/login",
    [
      check("username, please enter a valid username."),
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password")
    ],

    async (req, res) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
      

      const { email, password } = req.body;
      try {
        let user = await User.findOne({
          email
        });

        // email do not exist
        if (!user)
          return res.status(400).json({
            message: "User Not Exist"
          });

        // is a user, compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });
  
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          "secret",
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token
            });
          }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
);

//get login user with token
router.get("/me", auth, async (req, res) => {
    try {
      // request user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.send(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
});

//delete user
router.delete('/:id', async (req,res) =>{
    try{
        //pass in id selected, and delete that user
        User.findByIdAndRemove({_id: req.params.id}).then(function(user){
            // send delted user
            res.send(user)
        })
    } catch(err){
        res.send(err)
    }
})

module.exports = router;