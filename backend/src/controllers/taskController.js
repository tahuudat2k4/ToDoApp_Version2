import Task from '../models/taskModel.js';

// get task 
const getTaskController = async (req, res) => {
   try {
        // get user id from req.user
        const {userId} = req.params
        // validate user id 
        if(!userId){
            return res.status(400).json({
                message: 'No user id provided'
            })
        }
        // get tasks from db
        const tasks = await Task.find({createdBy: userId});
        if(!tasks){
            return res.status(404).json({
                message: 'No tasks found for this user'
            })
        }
        res.status(200).json({
            message: 'Here are your tasks',
            tasks
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
        const {title, description, createdBy} = req.body;
        if(!title || !description){
            return res.status(400).json({
                message: 'Title and Description are required'
            })
        }
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
        // validate id 
        if(!id){
            return res.status(404).json({
                message: 'No task id provided'
            })
        }
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
        // validate id 
        if(!id){
            return res.status(404).json({
                message: 'No tasks was found with this id'
            })
        }
        // find id 
        const task = await Task.findByIdAndDelete({_id: id});
        if(!task){
            return res.status(404).json({
                message: 'No tasks was found to delete'
            })
        }
        res.status(200).status({
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