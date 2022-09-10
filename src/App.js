import logo from './logo.svg';
import './App.css';
import LogIn from './features/auth/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
