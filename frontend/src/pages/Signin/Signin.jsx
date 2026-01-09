import { LoginForm } from '@/components/login-form'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router'
import AuthServices from '@/services/AuthServices'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const data = { email, password };
      const res = await AuthServices.signinUser(data);
      
      // Store token and user data in localStorage
      const userData = {
        token: res.data.token,
        user: res.data.user
      };
      localStorage.setItem('todoapp', JSON.stringify(userData));
      
      toast.success(res.data.message);
      navigate('/homepage');
      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signin failed');
      console.log(error);
    }
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <LoginForm
        email={ email }
        setEmail={ setEmail }
        password={ password }
        setPassword={ setPassword }
        handleSubmit={ handleSubmit }
      />
    </div>
  )
}

export default Signin;
