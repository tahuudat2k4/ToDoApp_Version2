import {Toaster} from 'sonner';
import {BrowserRouter, Routes, Route} from 'react-router';
import Homepage from './pages/Homepage/Homepage.jsx';
import Landing from './pages/Landing/Landing.jsx';
import Signin from './pages/Signin/Signin.jsx';
import Signup from './pages/Signup/Signup.jsx'; 


function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/homepage' element={<Homepage />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" richColors />
        </>
    )
}

export default App;
