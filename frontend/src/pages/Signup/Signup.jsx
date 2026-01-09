import { SignupForm } from "@/components/signup-form";
import AuthServices from "@/services/AuthServices";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Toaster, toast } from "sonner";


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { username, email, password };
      const res = await AuthServices.signupUser(data);
      toast.success(res.data.message);
      navigate('/signin');
      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignupForm
        username={ username }
        setUsername={ setUsername }
        email={ email }
        setEmail={ setEmail }
        password={ password }
        setPassword={ setPassword }
        handleSubmit={ handleSubmit }
      />
    </div>

  )
}

export default Signup;
