import React from 'react';
import styled from "styled-components"
import logo from "../../assets/img/logo.png"

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const List = styled.ul`
    display: flex;
`
const Links = styled.li`
    display: flex;
    a{
        color: blue;
        text-decoration:  none;
        padding: 1rem;    
    }
`

const Header = () => {
    return (
        <Nav>
            <img src={logo} width="100px" alt="logo do site" />
            <List>
                <Links><a href="/">Início</a></Links>
                <Links><a href="/">Sobre</a></Links>
                <Links><a href="/">Blog</a></Links>
                <Links><a href="/">Galeria</a></Links>
                <Links><a href="/">Contato</a></Links>
            </List>
        </Nav>
    )
}

export default Header