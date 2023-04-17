import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthBoard from './Pages/AuthBoard'
import ChatBoard from './Pages/Chat';

var flag = false

function App() {
    localStorage.getItem("token") ? flag=true : flag=false

    return (
        <Routes>
            <Route path='/chat' element={<ChatBoard />}/> 
            <Route path='/' element={<AuthBoard />}/>
        </Routes>
    );
}

export default App;
