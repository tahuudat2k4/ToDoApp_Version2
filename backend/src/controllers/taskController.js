import Task from '../models/taskModel.js';

// get task 
const getTaskController = async (req, res) => {
   try {
        // get user id from authenticated request
        const userId = req.user.id;
        
        // get tasks from db
        const tasks = await Task.find({createdBy: userId});
        
        res.status(200).json({
            message: 'Here are your tasks',
            todos: tasks
        })
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error fetching tasks',
            error
        })
   }
}
// create task 
const createTaskController = async (req, res) => {
     try {
        // Get user ID from authenticated request
        const createdBy = req.user.id;
        
        const {title, description} = req.body;
        
        // Validate required fields
        if(!title || !description){
            return res.status(400).json({
                message: 'Title and Description are required'
            })
        }
        
        // Create task with authenticated user ID
        const task = await Task.create({title, description, createdBy});
        const result = await task.save();

        res.status(201).json({
            message: 'Task created successfully',
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error creating task',
            error
        })
    }
}
// update task 
const updateTaskController = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const userId = req.user.id;
        
        // validate id 
        if(!id){
            return res.status(404).json({
                message: 'No task id provided'
            })
        }
        
        // Find task and verify ownership
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({
                message: 'Task not found'
            })
        }
        
        // Verify that the user owns this task
        if(task.createdBy.toString() !== userId){
            return res.status(403).json({
                message: 'You are not authorized to update this task'
            })
        }
        
        // Update the task
        const updatedTask = await Task.findByIdAndUpdate(id, {$set: data}, {new: true});
        res.status(200).json({
            message: 'Your task has been updated',
            updatedTask
        })
    } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Error updating task',
                error
            })
    }
}
// delete task 
const deleteTaskController = async (req, res) => {
    try {
        const {id} = req.params;
        const userId = req.user.id;
        
        // validate id 
        if(!id){
            return res.status(404).json({
                message: 'No task id provided'
            })
        }
        
        // Find task first to verify ownership
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({
                message: 'No task was found with this id'
            })
        }
        
        // Verify that the user owns this task
        if(task.createdBy.toString() !== userId){
            return res.status(403).json({
                message: 'You are not authorized to delete this task'
            })
        }
        
        // Delete the task
        await Task.findByIdAndDelete(id);
        res.status(200).json({
            message: 'Delete task successfully !',
            task
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error in deleting task',
            error
        })
    }
}
export {getTaskController, createTaskController, updateTaskController, deleteTaskController};