import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RouteGuard from './Components/JwtHandler';

function App() {
    return (
        <Routes>
            <Route path='/' element={<RouteGuard/>}/>
        </Routes>
    );
}

export default App;
