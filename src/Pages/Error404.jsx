import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from "../assets/img/error404.svg"
import { colorSecundary } from '../variaveis'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img{
        filter: drop-shadow(0 0 0.4rem #545458);
        margin-top: 1rem;
        animation: upAndDown 5s ease infinite;
        @media screen and (max-width: 768px){
            width: 50%;
        }
        @media screen and (max-width: 428px){
            width: 90%;
        }
        
        @keyframes upAndDown {
            0% {
                transform: translateY(0px);
            }
            50%{
                transform: translateY(30px);
            }
            100%{
                transform: translateY(0px);
            }          
        }
    }

`
const Btn = styled.button`
    background-color: #2a2aff;
    color: white;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-size: 1.1rem;
    margin:  1rem;
    border-radius: 5px;
    border: none;
    padding: .7rem 5rem;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
        transition: 2s ease all;
        background-color: ${colorSecundary};
    }
    @media screen and (max-width: 768px){
        padding: .7rem 3rem;       
    }
    
`
const Error404 = () => {
    return (
        <Container>
            <img src={img} alt="ilustração error 404" />
            <Link to={"/"}> <Btn>HOME</Btn></Link>
        </Container>
    )
}

export default Error404;