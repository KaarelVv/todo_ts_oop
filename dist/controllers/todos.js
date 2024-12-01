"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todos = [];
const createTodo = (req, res, next) => {
    try {
        const task = req.body.task;
        const newTodo = { id: Math.random().toString(), task };
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
