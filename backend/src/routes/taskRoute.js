import express from 'express';
import { getTaskController, createTaskController, updateTaskController, deleteTaskController } from '../controllers/taskController.js';

const router = express.Router();

// get all tasks
router.get('/getAll/:userId', getTaskController);
// create a new task
router.post('/create', createTaskController);
// update a task
router.patch('/update/:id', updateTaskController);
// delete a task
router.delete('/delete/:id', deleteTaskController);

export default router;
