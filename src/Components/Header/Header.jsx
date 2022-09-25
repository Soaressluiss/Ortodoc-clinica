import React from 'react';
import styled from "styled-components"
import logo from "../../assets/img/logo-white.svg"
import { Link } from "react-router-dom"
import { colorSecundary } from '../../variaveis';
import MenuHamburguer from './Menu/MenuHamburguer';
import ItensMenu from './ItensMenu';


const Nav = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    background-color:${colorSecundary};
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    img {
        width:14rem;
        padding:.4rem .8rem;
    }
    svg {
        font-size: 2rem;
        color: white;
    }

@media screen and (max-width: 768px) {
    img{
        width: 10.5rem;
    }  
}
`

const Header = () => {
    return (
    
        
        <Nav >
            <Link to={'/'}> <img src={logo} alt="logo do site" /> </Link>
            <ItensMenu />
            <MenuHamburguer />

        </Nav> 
    )
}

export default Header;