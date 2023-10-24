const Todo = require("../models/todo")

exports.homepage = async function (req, res) {
  res.send("Wiki home page");
}

exports.list_all_todos = async (req, res) => {
    const alltodos = await Todo.find();
    return res.status(200).json(alltodos);
  }

exports.single_todo = async (req, res) => {
  const { id } = req.params;
  const dog = await Todo.findById(id);
  return res.status(200).json(dog);
  }