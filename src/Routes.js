import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Pages/Blog';
import Contatos from './Pages/Contatos';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';

const Rotas = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} /> 
                    <Route path='/sobre' element={<Sobre />}/>
                    <Route path='/blog' element={<Blog />}/>
                    <Route path='/contato' element={<Contatos />}/>

                </Routes>
            </BrowserRouter>     
    )
}

export default Rotas;