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

exports.create_todo = async (req, res) => {
  const todo = new Todo({
    todoDescription : req.body.todoDescription,
    todoresponsible : req.body.todoResponsible,
    todoPriority : req.body.todoPriority
   });
  await todo.save();

  return res.status(201).json(todo);
}

exports.delete_todo = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "id is required" });
  } //check that the id can be found in the database
  if (!await Todo.findById(id)) {
    return res.status(404).json({ message: "id not found" });
  } else{
    await Todo.findByIdAndDelete(id);
    return res.status(204).json({ message: "Deleted" });
  }
}

exports.update_todo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  return res.status(200).json(todo);
}
