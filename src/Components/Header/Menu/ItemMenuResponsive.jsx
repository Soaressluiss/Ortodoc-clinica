import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const List = styled.ul`
display: flex;

@media screen and (max-width: 768px){
    flex-direction: column;
}

.itemMenu{
text-decoration:  none;
font-size: 1.1rem;
padding: 1rem;
color: white;
font-weight: bold;
text-transform: uppercase;
font-family: 'Poppins', sans-serif;
}
.itemMenu:hover{
color:#167fe7;
}
@media screen and (max-width: 768px){
.itemMenu{
    font-size: 1rem;   
}
}

`
const ItensMenuResponsive = () => {
    return (

        <List >
            <Link className='itemMenu' to={'/'}>Home</Link>
            <Link className='itemMenu' to={'/sobre'}>Sobre</Link>
            <Link className='itemMenu' to={'/blog'}>Blog</Link>
            <Link className='itemMenu' to={'/contato'}>Contato</Link>
        </List>
    )
}

export default ItensMenuResponsive;