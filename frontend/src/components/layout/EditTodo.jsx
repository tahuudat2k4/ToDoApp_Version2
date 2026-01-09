import TaskServices from '@/services/TaskServices';
import { toast } from 'sonner';
import { useState } from 'react';

const EditTodo = ({ task, setShowModal, getUserTask }) => {
    const [title, setTitle] = useState(task?.title || "");
    const [description, setDescription] = useState(task?.description || "");
    const [status, setStatus] = useState(task?.status || false);

    const handleClose = () => {
        setShowModal(false);
    }

    const handleSubmit = async () => {
        try {
            const data = { title, description, status };
            if (!title || !description) {
                return toast.error("Please fill all the fields");
            }

            await TaskServices.updateTask(task._id, data);
            setShowModal(false);
            getUserTask();
            toast.success("Task updated successfully");

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message);
        }
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            tabIndex="-1"
            role="dialog"
        >
            <div className="w-full max-w-md px-4" role="document">
                <div className="rounded-xl bg-white shadow-xl">
                    {/* title */}
                    <div className="flex items-center justify-between border-b px-6 py-4">
                        <h5 className="text-lg font-semibold text-gray-800">
                            Edit Task
                        </h5>
                    </div>

                    {/* body */}
                    <div className="space-y-4 px-6 py-4">
                        <div>
                            <label
                                className="mt-1 block text-sm text-gray-600"
                                htmlFor="editTitle"
                            >
                                Title
                            </label>
                            <input
                                id="editTitle"
                                placeholder="Title"
                                type="text"
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div>
                            <label
                                className="mt-1 block text-sm text-gray-600"
                                htmlFor="editDescription"
                            >
                                Description
                            </label>
                            <textarea
                                id="editDescription"
                                placeholder="Description"
                                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                id="status"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                checked={status}
                                onChange={(e) => setStatus(e.target.checked)}
                            />
                            <label
                                className="text-sm text-gray-700"
                                htmlFor="status"
                            >
                                Mark as completed
                            </label>
                        </div>
                    </div>

                    {/* footer */}
                    <div className="flex justify-end gap-3 border-t px-6 py-4">
                        <button
                            type="button"
                            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700
                   hover:bg-gray-200"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white
                   hover:bg-blue-700"
                            onClick={handleSubmit}
                        >
                            Update Task
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditTodo;
