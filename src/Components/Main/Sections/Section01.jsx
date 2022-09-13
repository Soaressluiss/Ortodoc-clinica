import React from 'react';
import styled from 'styled-components';
import { colorPrimary } from '../../../variaveis';
import Carrosel from '../../Header/carrosel/Carrosel';

const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 1.2rem;
    gap: 4rem;
    margin-top: 10rem;
    @media screen and (max-width: 768px){
    }
`

const TittlePrincipal = styled.h2`
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    margin:  0;
    font-weight: bold;
    color: ${colorPrimary};

@media screen and (max-width: 768px){
        font-size: 2.2rem;
    }
`
const Mensagem = styled.p`
    text-align: justify;
    color: ${colorPrimary};
    margin:0;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 1.3rem;

@media screen and (max-width: 768px){
    font-size: 1.2rem ;
    }
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
            <div>
                <TittlePrincipal> Ortodoc </TittlePrincipal>
                <Mensagem>Desde de 2005 atendendo você e sua família com muito amor e cuidado,
                    mudando sorrisos e vidas! </Mensagem>
                <Btn> Saiba mais!</Btn>
            </div>
            <Carrosel />
        </Section>
    )
}

export default Section01;