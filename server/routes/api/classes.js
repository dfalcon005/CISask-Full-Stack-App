const express = require('express')
const router = express.Router()

//get Class model
const Class = require("../../models/class")

//GET class
router.get('/', async (req,res) => {
    try{
        const classes = await Class.find({})
        res.send(classes)
    } catch(err){
        res.send(err)
    }
});

//Add class
router.post('/', async (req,res) => {
    try{
        //creates new class object using data in body, saves to db, returns the class that was saved to db
        Class.create(req.body).then(function(newclass){
            res.send(newclass)
        })
    } catch(err){
        res.send(err)
    }
})

// //Update class
router.put('/:id', async (req,res) => {
    try{
        //find class by id, update using request body, return updated class to 
        Class.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
            //find updated class
            Class.findOne({_id: req.params.id}).then(function(newclass){
                res.send(newclass)
            }) 
        })
    } catch(err){
        res.send(err)
    }
})

// //Delete class
router.delete('/:id', async (req,res) =>{
    try{
        //pass in id selected, find it in mongo and remove it, pass that class back
        Class.findByIdAndRemove({_id: req.params.id}).then(function(newclass){
            res.send(newclass)
        })
    } catch(err){
        res.send(err)
    }
})


module.exports = router;