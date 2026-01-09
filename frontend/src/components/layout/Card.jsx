import TaskServices from "@/services/TaskServices";
import { toast } from "sonner";
import {useState} from 'react'


const Card = ({allTask, getUserTask}) => {
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
            toast.success('Task deleted successfully !');
            getUserTask();
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    // Handle delete button click
  return (
     <>
            <div className="flex flex-row flex-wrap ">
                {
                    allTask?.map((task, index) => (
                        <>
                            <div className="card border-primary mb-3 mt-3" style={ { maxWidth: '18rem' } } key={ index }>
                                <div className="card-header">
                                    <div className="chead">
                                        <h6>{ task?.title.substring(0, 10) }</h6>
                                        <h6 className={ task?.isCompleted === true ? 'task-cmp' : 'task-inc' }>
                                            { task?.isCompleted === true ? 'Completed' : 'Incomplete' }
                                        </h6>
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <p className='card-text'>{ task?.description }</p>
                                    <h6>Data: { task?.createdAt.substring(0, 10) }</h6>
                                </div>
                                <div className="card-footer bg-transparent border-primary">
                                    <button className='btn btn-warning' title="Edit Task" onClick={()=> handleEdit(task) }>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className='btn btn-danger ms-2' title="Delete Task"
                                        onClick={ () => handleDelete(task?._id) }>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <div>
                                { showModal && 
                                <EditTodo task={ editingTask }
                                setShowModal={ setShowModal } 
                                getUserTask={getUserTask} /> }
                            </div>
                        </>
                    ))
                }
            </div>
        </>
  )
}

export default Card;
