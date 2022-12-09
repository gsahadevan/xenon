// import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route index element={<Dashboard />}></Route>
                <Route path='dashboard' element={<Dashboard />}></Route>
                <Route path='error' element={<Error />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
