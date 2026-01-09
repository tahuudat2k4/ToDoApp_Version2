import { LoginForm } from '@/components/login-form'
import { useState } from 'react'
import { toast } from 'sonner'
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
      
      // Validate response data
      if (!res.data?.token || !res.data?.user) {
        console.error('Invalid server response: missing token or user data');
        throw new Error('LOGIN_DATA_MISSING');
      }
      
      // Store token and user data in localStorage
      try {
        const userData = {
          token: res.data.token,
          user: res.data.user
        };
        localStorage.setItem('todoapp', JSON.stringify(userData));
      } catch (storageError) {
        console.error('Failed to store authentication data:', storageError);
        toast.error('Failed to store authentication data. Please try again.');
        return;
      }
      
      toast.success(res.data.message);
      navigate('/homepage');
      console.log(res.data);
    } catch (error) {
      // Handle different error types with user-friendly messages
      if (error.message === 'LOGIN_DATA_MISSING') {
        toast.error('Login failed. Please try again.');
      } else {
        toast.error(error.response?.data?.message || 'Signin failed');
      }
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
