"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const todos = [];
const createTodo = (req, res, next) => {
    try {
        const task = req.body.task;
        const newTodo = { id: Math.ceil(Math.random() * 10).toString(), task };
        todos.push(newTodo);
        res.status(201).json({
            message: 'Created new Todo',
            createdTask: newTodo,
        });
    }
    catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    try {
        res.status(201).json({
            message: 'Todo list returned',
            tasks: todos
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    try {
        const taskId = req.params.id;
        const editedTask = req.body.task;
        const taskIndex = todos.findIndex((todo) => todo.id === taskId);
        todos[taskIndex] = new todo_1.Todo(todos[taskIndex].id, editedTask);
        res.status(200).json({
            message: 'Task updated',
            updatedTask: todos[taskIndex]
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    try {
        const taskId = req.params.id;
        const taskIndex = todos.findIndex((todo) => todo.id === taskId);
        todos.splice(taskIndex, 1);
        res.status(200).json({
            message: 'Task deleted at index' + taskIndex,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteTodo = deleteTodo;
