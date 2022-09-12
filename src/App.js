import logo from './logo.svg';
import './App.css';
import LogIn from './features/auth/Login';
import SignUp from './features/auth/SignUp'

import Home from './pages/Home'

import AppBar from './features/appbar/AppBar'

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
