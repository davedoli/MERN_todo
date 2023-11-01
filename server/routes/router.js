const express = require('express');
const router = express.Router();
//const Todo = require("../models/todo") moved controllers out
const todo_controller = require("../controllers/todo");
const isLoggedIn = require("../middleware/isLoggedIn");



router.post("/login", require('../controllers/login'));
router.get("/", todo_controller.homepage);
router.get("/todos", todo_controller.list_all_todos);
router.get("/todos/:id", todo_controller.single_todo);
router.post("/todos", todo_controller.create_todo);
router.delete("/todos/:id", todo_controller.delete_todo);
router.put("/todos/:id", todo_controller.update_todo);

module.exports = router;