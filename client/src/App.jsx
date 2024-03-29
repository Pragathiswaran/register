import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';
import Dashboard from './pages/dashboard';
// import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
