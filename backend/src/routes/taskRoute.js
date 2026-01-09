import express from 'express';
import { getTaskController, createTaskController, updateTaskController, deleteTaskController } from '../controllers/taskController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// get all tasks - protected route
router.get('/getAll', authMiddleware, getTaskController);
// create a new task - protected route
router.post('/create', authMiddleware, createTaskController);
// update a task - protected route
router.patch('/update/:id', authMiddleware, updateTaskController);
// delete a task - protected route
router.delete('/delete/:id', authMiddleware, deleteTaskController);

export default router;
