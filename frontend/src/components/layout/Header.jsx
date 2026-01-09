import { CircleUser } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';
import {toast} from 'sonner';


const Header = () => {
    const navigate = useNavigate();
    // logout function 
    const handleLogout = () => {
        localStorage.removeItem('todoapp');
        toast.success('Logged out successfully ');
        navigate('/signin', {replace: true});
    }
  return (
    <div className='flex items-center justify-between min-w-screen h-12 sticky top-0  p-8 border-b border-gray-300'>
        {/*welcome message */}
        <div className="flex items-center ">
            <CircleUser size={32} />
            <p className="text-xl font-bold ml-2">Welcome !</p>
        </div>
        {/* logout button */}
        <button onClick={handleLogout} className='cursor-pointer'>
            <LogOut size={32} />
        </button>
    </div>
  )
}

export default Header; 
