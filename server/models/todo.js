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
        type: Boolean, 
        default: false
    }
});



const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
