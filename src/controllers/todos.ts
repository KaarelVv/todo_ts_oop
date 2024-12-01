import { Request, Response, NextFunction } from 'express';

interface Todo {
  id: string;
  task: string;
}

const todos: Todo[] = [];

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = (req.body as { task: string }).task;
    const newTodo: Todo = { id: Math.random().toString(), task };
    todos.push(newTodo);
    res.status(201).json({
      message: 'Created new Todo',
      createdTask: newTodo,
    });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};