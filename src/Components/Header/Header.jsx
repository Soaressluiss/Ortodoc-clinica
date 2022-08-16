import React from 'react';
import styled from "styled-components"
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom"
import "../Header/header.css"

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const List = styled.ul`
    display: flex;
    `


const Header = () => {
    return (
        <Nav>
            <img src={logo} width="100px" alt="logo do site" />
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