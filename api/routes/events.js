const router = require("express").Router();
const EventsList = require("../models/events");

//Add an events
router.post('/add',async (req, res) => {
    const eventlist = new EventsList({
    title: req.body.title,
    start:Date(req.body.start)
    });
    try {
    await eventlist.save();
  
    res.status(200).json("Event added");
    } catch (err) {
 console.log(err);
    }
    });


//show the events
router.get("/show", (req, res) => {
    try{
       EventsList.find((err, tasks) => {
            res.status(200).json(tasks);
        });
    }catch(err){
        res.status(500).json(err);
    }
   
    });   


    module.exports = router