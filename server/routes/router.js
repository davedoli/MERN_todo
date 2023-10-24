const express = require('express');
const router = express.Router();
//const Todo = require("../models/todo") moved controllers out
const todo_controller = require("../controllers/todo");


router.get("/login", require('../controllers/login'));

router.get("/", todo_controller.homepage);
router.get("/todos", todo_controller.list_all_todos);
router.get("/todos/:id", todo_controller.single_todo);


module.exports = router;