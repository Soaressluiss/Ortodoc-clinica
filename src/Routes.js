import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Blog from './Pages/Blog';
import Contatos from './Pages/Contatos';
import Error404 from './Pages/Error404';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';

const Rotas = () => {
    return (
        <BrowserRouter>
                <ScrollToTop/>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contato' element={<Contatos />} />
                <Route path='*' element={<Error404 />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;