import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import todoRoutes from './routes/todos';

const app = express();

// Middleware
app.use(json());

// Routes
app.use('/todos', todoRoutes);

// Error Handling Middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
});


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

app.listen(3011, () => {
  console.log('Server started at port 3011');
});
