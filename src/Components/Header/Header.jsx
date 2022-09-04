import React from 'react';
import styled from "styled-components"
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom"

const Nav = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    justify-content: space-between;
    align-items: center;
    background-color: #C0D6DF;
`
const List = styled.ul`
    display: flex;

    .itemMenu{
    text-decoration:  none;
    padding: 1rem;
    color: #4a9ae9;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Heebo', sans-serif;
    }
    .itemMenu:hover{
    color:#167fe7;
}
    `


const Header = () => {
    return (
        <Nav>
         <Link to={'/'}> <img src={logo} width="100px" alt="logo do site" /> </Link> 
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