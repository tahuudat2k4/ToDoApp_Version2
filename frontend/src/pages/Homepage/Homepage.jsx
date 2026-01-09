import Header from '@/components/layout/Header';
import {Input} from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import PopModal from '@/components/layout/PopModal';
import Spinner from '@/components/layout/Spinner';
import Card from '@/components/layout/Card'
import TaskServices from '@/services/TaskServices';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState([]);
  const [loading, setLoading] = useState(false);
  // handle modal 
  const handleModalOnClick = () =>{
    setShowModal(true);
    setTitle("");
    setDescription("");
  }
  // get user task 
  const getUserTask =  async() => {
    setLoading(true);
    try {
      const {data} = await TaskServices.getAllTasks();
      setLoading(false);
      setAllTask(data?.todos);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
    // Get user task 
    useEffect(()=>{
      getUserTask();
    }, []);
    // 
  return (
    <div className='flex flex-col min-h-screen width-full'>
      <Header/>
      <div className='container mx-auto mt-8 w-full'>
        <div className='flex gap-20 justify-between'>
          <h1 className='text-xl font-bold'>Manage Your Task</h1>
          <Input className='w-80' ></Input>
          <Button className='flex cursor-pointer' onClick={handleModalOnClick}><Plus/> Create new task</Button>
        </div>
        {loading ?(<Spinner/>) :( allTask && <Card allTask={allTask} getUserTask={getUserTask}/>)}
        <PopModal
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        showModal={showModal}
        setShowModal={setShowModal}
        getUserTask={getUserTask}
        />
      </div>
    </div>
  )
}


export default Homepage;
