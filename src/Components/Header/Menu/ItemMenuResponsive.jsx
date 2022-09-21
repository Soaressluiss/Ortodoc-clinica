import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const List = styled.ul`
display: flex;

@media screen and (max-width: 768px){
    /* display: none; */
    flex-direction: column;
}

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
@media screen and (max-width: 768px){
.itemMenu{
    font-size: 1rem;
   
}
}
/* @media screen and (max-width: 425px){
display: none;
} */
`
const ItensMenuResponsive = () => {
    return (

        <List >
            <Link className='itemMenu' to={'/'}>Home</Link>
            <Link className='itemMenu' to={'/sobre'}>Sobre</Link>
            <Link className='itemMenu' to={'/blog'}>Blog</Link>
            <Link className='itemMenu' to={'/galeria'}>Galeria</Link>
            <Link className='itemMenu' to={'/contato'}>Contato</Link>
        </List>
    )
}

export default ItensMenuResponsive;