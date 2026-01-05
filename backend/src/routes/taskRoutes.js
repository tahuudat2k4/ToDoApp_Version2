import express from 'express';

const router = express.Router();
// get all tasks
router.get('/api/tasks', (req,res) => {

})
// create a new task
router.post('/api/tasks', (req,res) => {})
// update a task
router.put('/api/tasks/:id', (req,res) => {})
// delete a task
router.delete('/api/tasks/:id', (req,res) => {})

export default router;
