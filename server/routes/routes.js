const express = require('express');
const router = express.Router();



router.get("/todos", async (req, res) => {
    const alltodos = await Todo.find();
    return res.status(200).json(alltodos);
  });
  
router.get("/todos/:id", async (req, res) => {
const { id } = req.params;
const dog = await Todo.findById(id);
return res.status(200).json(dog);
});

module.exports = router;