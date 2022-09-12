import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styled from 'styled-components';
import { colorPrimary } from '../../../variaveis';
import Carrosel from '../../Header/Carrosel';
import "animate.css/animate.min.css";

const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 1.2rem;
    gap: 10rem;
    margin-top: 10rem;
`

const TittlePrincipal = styled.h2`
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    margin:  0;
    font-weight: bold;
    color: ${colorPrimary};
`
const Mensagem = styled.p`
    text-align: justify;
    color: ${colorPrimary};
    margin:0;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
`
const Btn = styled.button`
    background-color: #167fe7;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 1rem;
    border-radius: 5px;
    padding: .7rem;
    cursor: pointer;
    &:hover {
        background-color: ${colorPrimary};
        transition: 1s;

    }

`
const Section01 = () => {

    return (
        <Section>
            <AnimationOnScroll animateIn='animate__slideInLeft'>
            <div>
                <TittlePrincipal> Ortodoc </TittlePrincipal>
                <Mensagem>Desde de 2005 atendendo você e sua família com muito amor e cuidado,
                    mudando sorrisos e vidas! </Mensagem>
                <Btn> Saiba mais!</Btn>
            </div>
            </AnimationOnScroll>
            <Carrosel/>
        </Section>
    )
}

export default Section01;