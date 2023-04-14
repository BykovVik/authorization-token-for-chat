import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthBoard from './Pages/AuthBoard'
import ChatBoard from './Pages/Chat';


function App() {
    return (
        <Routes>
            <Route path='/' element={<AuthBoard />}/>
            <Route path='/chat' element={<ChatBoard />}/>
        </Routes>

    );
}

export default App;
