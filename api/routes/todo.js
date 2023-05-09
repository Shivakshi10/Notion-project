const router = require("express").Router();
const TodoTask = require("../models/TodoTask");

//Add Task
router.post('/:name/add',async (req, res) => {
    const todoTask = new TodoTask({
    content: req.body.content,
    name:req.params.name
    });
    try {
    await todoTask.save();
  
    res.status(200).json("Task added");
    } catch (err) {
 console.log(err);
    }
    });


//Show tasks    
router.get("/:name/show", (req, res) => {
    try{
        TodoTask.find({name:req.params.name}, (err, tasks) => {
            res.status(200).json(tasks);
        });
    }catch(err){
        res.status(500).json(err);
    }
   
    });   
 
//Delete Tasks    
router.delete("/:id", async (req, res) => {
    try {
        const task = await TodoTask.findById(req.params.id);
           
        await task.deleteOne();
        res.status(200).json("the post has been deleted");
          
        } catch (err) {
          res.status(500).json(err);
        }
      }); 
      
//Update Tasks
router.put("/edit/:id", async (req, res) => {
    try {
      const task = await TodoTask.findById(req.params.id);
      
        await task.updateOne({ $set: req.body });
        res.status(200).json("the post has been updated");
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router