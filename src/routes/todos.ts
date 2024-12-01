import { Router } from 'express';
import { createTodo } from '../controllers/todos';

const router = Router();

// Define your routes
router.post('/', createTodo);
router.get('/', (req, res) => {
  res.send('GET all todos');
});
router.patch('/:id', (req, res) => {
  res.send(`PATCH todo with ID: ${req.params.id}`);
});
router.delete('/:id', (req, res) => {
  res.send(`DELETE todo with ID: ${req.params.id}`);
});

export default router;
