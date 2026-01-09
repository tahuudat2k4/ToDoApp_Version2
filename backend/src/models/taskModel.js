import mongoose from 'mongoose';
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    createdBy: {
        ref: 'users',
        type: mongoose.Schema.ObjectId
    }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
export default Task;