import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { colorPrimary } from '../../../variaveis';
import ItensMenuResponsive from './ItemMenuResponsive';

const Container = styled.div`
    background-color:${colorPrimary};
    position:fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 200px;
    animation: show .3s ease;
    
    @keyframes show {
        from{
            opacity: 0;
            width: 0;
        }to{
            opacity: 1;
            width: 200px;
        }
        
}    
    >svg {
        font-size: 2rem;
        color: white;
        display: none;
        margin-top: .5rem;
        margin-left: .5rem;
        animation: spin 0.4s both ease-in-out;
        
    }
    @media screen and (max-width:768px ){
        svg{
            display: block;
        }
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(180deg);
        }
    }
    `

const IsOpenMenu = ({ active }) => {

    const OpenMenu = () => {
        active(false)
    }
    return (
        <Container sideBar={active}>
            <FaTimes onClick={OpenMenu} />
            <ItensMenuResponsive />
        </Container>
    )
}

export default IsOpenMenu;