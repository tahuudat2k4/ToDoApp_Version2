import TaskServices from "@/services/TaskServices";
import { toast } from "sonner";
import { useState } from 'react';
import EditTodo from './EditTodo';
import { Pencil, Trash2 } from 'lucide-react';

const Card = ({ allTask, getUserTask }) => {
    const [showModal, setShowModal] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    // Handle edit button click
    const handleEdit = (task) => {
        setEditingTask(task);
        setShowModal(true);
    }

    const handleDelete = async (id) => {
        try {
            await TaskServices.deleteTask(id);
            toast.success('Task deleted successfully!');
            getUserTask();
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    allTask?.map((task) => (
                        <div
                            key={task._id}
                            className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl 
                                     transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2 flex-1">
                                        {task?.title}
                                    </h3>
                                    <span
                                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                                                  ${task?.isCompleted
                                                ? 'bg-green-100 text-green-700 ring-1 ring-green-600/20'
                                                : 'bg-amber-100 text-amber-700 ring-1 ring-amber-600/20'
                                            }`}
                                    >
                                        {task?.isCompleted ? '✓ Completed' : '○ Incomplete'}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="px-6 py-5 space-y-3">
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-[60px]">
                                    {task?.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-medium">
                                        {new Date(task?.createdAt).toLocaleDateString('en-US', { 
                                            year: 'numeric', 
                                            month: 'short', 
                                            day: 'numeric' 
                                        })}
                                    </span>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex gap-3">
                                <button
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
                                             bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium 
                                             transition-colors duration-200 shadow-sm hover:shadow-md"
                                    title="Edit Task"
                                    onClick={() => handleEdit(task)}
                                >
                                    <Pencil className="w-4 h-4" />
                                    <span>Edit</span>
                                </button>
                                <button
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
                                             bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium 
                                             transition-colors duration-200 shadow-sm hover:shadow-md"
                                    title="Delete Task"
                                    onClick={() => handleDelete(task?._id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Edit Modal */}
            {showModal &&
                <EditTodo
                    task={editingTask}
                    setShowModal={setShowModal}
                    getUserTask={getUserTask}
                />
            }
        </>
    )
}

export default Card;
