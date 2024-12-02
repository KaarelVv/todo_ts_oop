import { Request, Response, NextFunction } from 'express';
import { Todo } from '../models/todo';



const todos: Todo[] = [];

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = (req.body as { task: string }).task;
    const newTodo: Todo = { id: Math.ceil(Math.random() * 10).toString(), task };
    todos.push(newTodo);
    res.status(201).json({
      message: 'Created new Todo',
      createdTask: newTodo,
    });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }


};

export const getTodo = (req: Request, res: Response, next: NextFunction) =>  {
  try {
    res.status(201).json({
      message: 'Todo list returned',
      tasks: todos
    })
  } catch (error) {
    next(error);
  }
}

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId = req.params.id
    const editedTask = (req.body as { task: string }).task;
    const taskIndex = todos.findIndex((todo) => todo.id === taskId)

    todos[taskIndex] = new Todo(todos[taskIndex].id, editedTask)

    res.status(200).json({
      message: 'Task updated',
      updatedTask: todos[taskIndex]
    })
  } catch (error) {
    next(error)
  }
}

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId = req.params.id
    const taskIndex = todos.findIndex((todo) => todo.id === taskId)

    todos.splice(taskIndex, 1)

    res.status(200).json({
      message: 'Task deleted at index' + taskIndex,

    })
  } catch (error) {
    next(error)
  }
}