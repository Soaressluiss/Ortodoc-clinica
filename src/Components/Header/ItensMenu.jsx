import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const List = styled.ul`
display: flex;
list-style:none;

@media screen and (max-width: 768px){
    display: none;
}

.itemMenu{
text-decoration:  none;
font-size: 1.1rem;
padding: 1rem;
color: #4a9ae9;
text-shadow: 1px 1px 1px #8f8b8b;
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
@media screen and (max-width: 425px){
display: none;
}
`
const ItensMenu = () => {
    return (

        <List >
            <li>
                <Link className='itemMenu' to={'/'}>Home</Link>
            </li>
            <li>
                <Link className='itemMenu' to={'/sobre'}>Sobre</Link>
            </li>
            <li>
                <Link className='itemMenu' to={'/blog'}>Blog</Link>
            </li>
            <li>
                <Link className='itemMenu' to={'/contato'}>Contato</Link>
            </li>
        </List>
    )
}

export default ItensMenu;