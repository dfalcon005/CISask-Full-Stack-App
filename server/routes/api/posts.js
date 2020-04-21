const express = require('express')
const router = express.Router()

//get Post model
const Post = require("../../models/post")

//GET posts
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find({})
        res.send(posts)
    } catch(err){
        res.send(err)
    }
});

//Add posts
router.post('/', async (req,res) => {
    try{
        //creates new post object using data in body, saves to db, returns the post that was saved to db
        Post.create(req.body).then(function(post){
            res.send(post)
        })
    } catch(err){
        res.send(err)
    }
})

//Update posts
router.put('/:id', async (req,res) => {
    try{
        //find post by id, update using request body, return updated post to 
        Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
            //find updated post
            Post.findOne({_id: req.params.id}).then(function(post){
                res.send(post)
            }) 
        })
    } catch(err){
        res.send(err)
    }
})

//Delete posts
router.delete('/:id', async (req,res) =>{
    try{
        //pass in id selected, find it in mongo and remove it, pass that post back
        Post.findByIdAndRemove({_id: req.params.id}).then(function(post){
            res.send(post)
        })
    } catch(err){
        res.send(err)
    }
})


module.exports = router;