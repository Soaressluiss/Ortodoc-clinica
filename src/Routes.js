import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';

const Rotas = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} /> 
                    <Route path='/sobre' element={<Sobre />}/> 

                </Routes>
            </BrowserRouter>     
    )
}

export default Rotas;