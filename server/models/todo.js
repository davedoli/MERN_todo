const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({

    todoDescription: {
        type: String
    },
    todoResponsible: {
        type: String
    },
    todoPriority: {
        type: String
    },
    todoCompleted: {
        type: Boolean
    }
});



const Todo = mongoose.model('Todo', todoSchema);
console.log( "Todo in todo.js", typeof Todo)
module.exports = Todo;
