import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { FaHome } from "react-icons/fa";
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Four_of_Four from './pages/Four_of_Four';
import Dashboard from './pages/Dashboard';
import StudentProvider from './context/StudentContext';
import UserProvider from './context/UserContext';

function App()
 {

  const [name, setName] = useState("Kelvin")

  
  return (
    <>
    <BrowserRouter>
   
   <UserProvider>
    <StudentProvider>
    <Routes>
      <Route path='/' element={<Layout/> }>
         <Route index element={<Home /> } />
         <Route path="/about" element={<About /> } />
         <Route path="/dashboard" element={<Dashboard /> } />
         <Route path="*" element={<Four_of_Four /> } />
      </Route>
    </Routes>
    </StudentProvider>
    </UserProvider>
    
    </BrowserRouter>
    </>
  )
}

export default App
