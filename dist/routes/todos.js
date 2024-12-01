"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
// Define your routes
router.post('/', todos_1.createTodo);
router.get('/', (req, res) => {
    res.send('GET all todos');
});
router.patch('/:id', (req, res) => {
    res.send(`PATCH todo with ID: ${req.params.id}`);
});
router.delete('/:id', (req, res) => {
    res.send(`DELETE todo with ID: ${req.params.id}`);
});
exports.default = router;
