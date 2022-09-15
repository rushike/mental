import logo from './logo.svg';
import './App.css';
import LogIn from './features/auth/Login';
import SignUp from './features/auth/SignUp'

import Home from './pages/Home'

import AppBar from './features/appbar/AppBar'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import OutCome from './features/outcomes/OutCome';
import Userprofile from './features/user_profile/Userprofile';
import Endpage from './features/end_page/Endpage';


function App() {
  return (
    <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/feedback" element={<OutCome/>}/>
        <Route path="/user" element={<Userprofile/>}/>
        <Route path="/sessionend" element={<Endpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
