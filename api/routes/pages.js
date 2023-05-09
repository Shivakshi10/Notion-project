const router = require("express").Router();
const PagesList = require("../models/pagesList");

//Add a page
router.post('/add',async (req, res) => {
    const pagelist = new PagesList({
    name: req.body.name,
    desc:req.body.name
    });
    try {
    await pagelist.save();
  
    res.status(200).json("Page added");
    } catch (err) {
 console.log(err);
    }
    });


//show the pages
router.get("/show", (req, res) => {
   try{
      PagesList.find((err, tasks) => {
           res.status(200).json(tasks);
       });
   }catch(err){
       res.status(500).json(err);
   }
  
   });   
    

    module.exports = router