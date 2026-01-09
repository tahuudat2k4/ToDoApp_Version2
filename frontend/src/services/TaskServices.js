import instance from "./AxiosInstance";

// Create a new task
const createTask = (data) => {
    return instance.post('/tasks/create', data);
}
// Get all tasks for a user
const getAllTasks = (userId) => {
    return instance.get(`/tasks/getAll/${userId}`);
}
// Update a task
const updateTask = (id, data) => {
    return instance.patch(`/tasks/update/${id}`,data);
}
// Delete a task
const deleteTask = (id) => {
    return instance.delete(`/tasks/delete/${id}`);
}

const TaskServices = {createTask, getAllTasks, updateTask, deleteTask};
export default TaskServices;