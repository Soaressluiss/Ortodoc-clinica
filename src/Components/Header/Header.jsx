import React from 'react';
import styled from "styled-components"
import logo from "../../assets/img/logo-white.svg"
import { Link } from "react-router-dom"
import { colorSecundary } from '../../variaveis';


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
        width:30%;
        padding: .8rem;
    }
`
const List = styled.ul`
    display: flex;

    .itemMenu{
    text-decoration:  none;
    font-size: 1.1rem;
    padding: 1rem;
    color: #4a9ae9;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    }
    .itemMenu:hover{
    color:#167fe7;
}
    `


const Header = () => {
    return (
        <Nav>
            <Link to={'/'}> <img src={logo}  alt="logo do site" /> </Link> 
            <List>
                <Link className='itemMenu' to={'/'}>Home</Link>
                <Link className='itemMenu' to={'/sobre'}>Sobre</Link>
                <Link className='itemMenu' to={'/blog'}>Blog</Link>
                <Link className='itemMenu' to={'/galeria'}>Galeria</Link>
                <Link className='itemMenu' to={'/contato'}>Contato</Link>
            </List>
        </Nav>
    )
}

export default Header;