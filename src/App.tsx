import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthBoard from './Pages/AuthBoard'


function App() {
    return (
        <Routes>
            <Route path='/' element={<AuthBoard />}/>
        </Routes>

    );
}

export default App;
