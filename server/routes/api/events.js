const express = require('express')
const router = express.Router()

//get Event model
const Event = require("../../models/event")

//GET event
router.get('/', async (req,res) => {
    try{
        const events = await Event.find({})
        res.send(events)
    } catch(err){
        res.send(err)
    }
});

//Add event
router.post('/', async (req,res) => {
    try{
        //creates new event object using data in body, saves to db, returns the event that was saved to db
        Event.create(req.body).then(function(event){
            res.send(event)
        })
    } catch(err){
        res.send(err)
    }
})

//Update event
router.put('/:id', async (req,res) => {
    try{
        //find event by id, update using request body, return updated event to 
        Event.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
            //find updated event
            Event.findOne({_id: req.params.id}).then(function(event){
                res.send(event)
            }) 
        })
    } catch(err){
        res.send(err)
    }
})

//Delete event
router.delete('/:id', async (req,res) =>{
    try{
        //pass in id selected, find it in mongo and remove it, pass that event back
        Event.findByIdAndRemove({_id: req.params.id}).then(function(event){
            res.send(event)
        })
    } catch(err){
        res.send(err)
    }
})


module.exports = router;