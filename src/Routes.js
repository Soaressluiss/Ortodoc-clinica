import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const Rotas = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />  
                </Routes>
            </BrowserRouter>     
    )
}

export default Rotas;