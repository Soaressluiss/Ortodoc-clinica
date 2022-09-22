import React from 'react'
import styled from 'styled-components';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { colorPrimary, colorSecundary } from '../variaveis';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Mensagem = styled.article`
    margin: 8rem auto 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 70%;
    border-radius: 20px;
    -webkit-box-shadow: 3px 11.5px 17.5px 5px #ddd;
    -moz-box-shadow: 3px 11.5px 17.5px 5px #ddd;
    box-shadow: 3px 11.5px 17.5px 5px #ddd;
    @media screen and (max-width: 428px){
            width: 80%;
        }
    h3{
        font-size: 2.5rem;
        color: ${colorPrimary};
        font-weight: bold;
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        @media screen and (max-width: 768px){
            text-align: center;
        }
        
        @media screen and (max-width: 428px){
            font-size: 2rem;
        }
        
    }
    p{
        font-size: 1.5rem;
        margin: 0;
        font-weight: bold;
        text-align: justify;
        font-family: 'Noto Sans JP', sans-serif;
        padding: 1rem;
        color: ${colorSecundary};
        @media screen and (max-width: 428px){
            font-size: 1rem;
        }
    }
`
const Sobre = () => {
  return (
    <>
    <Header/>
    <AnimationOnScroll animateIn='animate__fadeIn'>   
    <Mensagem>
        <h3>Nossa História</h3>
        <p>A Ortodoc surgiu em 2005 com o Objetivo de levar o que há de mais moderno em atendimentos ordontologicos. Sorrir com vontade. Sorrir com paixão. Sorrir com liberdade. A qualquer momento. Sem receio, sem constrangimento, sem medo de ser feliz. Nós acreditamos que o brilho que faz o mundo girar está no sorriso de cada um. E, para expandir esse poder transformador, oferecemos em nossas unidades uma enorme variedade de soluções odontológicas. Mais do que proporcionar um atendimento qualificado com produtos certificados, temos como objetivo a segurança e o conforto em todas as etapas de nossos serviços. Além disso, nossos profissionais são referências em suas áreas de atuação e atestam os pilares da marca. </p>  
    </Mensagem>
    </AnimationOnScroll>
    <Footer />
    </>
  )
}

export default Sobre;