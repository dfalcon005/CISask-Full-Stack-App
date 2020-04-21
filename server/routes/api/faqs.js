const express = require('express')
const router = express.Router()

//get FAQ model
const FAQ = require("../../models/faq")

//GET FAQ
router.get('/', async (req,res) => {
    try{
        const faqs = await FAQ.find({})
        res.send(faqs)
    } catch(err){
        res.send(err)
    }
});

//Add FAQ
router.post('/', async (req,res) => {
    try{
        //creates new FAQ object using data in body, saves to db, returns the FAQ that was saved to db
        FAQ.create(req.body).then(function(faq){
            res.send(faq)
        })
    } catch(err){
        res.send(err)
    }
})

//Update FAQ
router.put('/:id', async (req,res) => {
    try{
        //find FAQ by id, update using request body, return updated FAQ to 
        FAQ.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
            //find updated event
            FAQ.findOne({_id: req.params.id}).then(function(faq){
                res.send(faq)
            }) 
        })
    } catch(err){
        res.send(err)
    }
})

//Delete FAQ
router.delete('/:id', async (req,res) =>{
    try{
        //pass in id selected, find it in mongo and remove it, pass that FAQ back
        FAQ.findByIdAndRemove({_id: req.params.id}).then(function(faq){
            res.send(faq)
        })
    } catch(err){
        res.send(err)
    }
})


module.exports = router;