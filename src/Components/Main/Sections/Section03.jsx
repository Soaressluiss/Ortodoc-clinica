import React from 'react';
import { colorPrimary, colorSecundary } from '../../../variaveis';
import checapes from "../../../assets/icons/checapes.png"
import aparelho from "../../../assets/icons/aparelho.png"
import clareamento from "../../../assets/icons/clareamento.png"
import implante from "../../../assets/icons/implante.png"
import styled from 'styled-components';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-content:center;
    margin-top: 7rem;

    @media screen and (max-width: 768px){
    margin-top: 3rem;
    }
`
const Tittle = styled.h2`
    margin: 0 auto;
    color: ${colorPrimary};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2.3rem;
    text-align: center;

@media screen and (max-width: 768px){
    font-size: 1.5rem;
    margin: 0 auto;
    }

    `
const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
    text-align: justify;
    flex-wrap:nowrap;
    margin: 2rem 2.3rem;

@media screen and (max-width: 768px){
    flex-direction: column;
    margin: 2rem 1rem;
    }
`
const Tratamentos = styled.article`
    -webkit-box-shadow: 3px 11.5px 17.5px 5px #ddd;
    -moz-box-shadow: 3px 11.5px 17.5px 5px #ddd;
    box-shadow: 3px 11.5px 17.5px 5px #ddd;
    display: flex;
    background-color: white;
    padding: 0.6rem;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px){
        img {
            width: 4%;
        }
        @media screen and (max-width: 428px){
        img {
        width: 15%;
    }
}    
    }
    h3{
        color: ${colorPrimary};
        font-family: 'Heebo', sans-serif;
    
    }
    p{
        color: ${colorSecundary};
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 1.2rem;
        text-align: justify;
    }
`

const Section03 = () => {
    return (
        <AnimationOnScroll animateIn='animate__slideInUp'>
            <Container>
                <Tittle>Todo os tratamentos e cuidados para o seu sorriso.</Tittle>
                <Wrapper>
                    <Tratamentos>
                        <img src={checapes}
                            alt="implante"
                            width="15%" />
                        <h3> Check Ups </h3>
                        <p>Ir a um dentista geral é um tipo de cuidado do qual não dá para abrir mão, pois esse profissional está capacitado para avaliar desde a aparência até o estado da estrutura dos dentes e a estrutura óssea da face.</p>
                    </Tratamentos>
                    <Tratamentos>
                        <img src={aparelho}
                            alt="aparelho"
                            width="15%" />
                        <h3> Aparelho Dentário </h3>
                        <p>É um dispositivo que estimula os movimentos dos dentes. O objetivo dessa movimentação é corrigir a posição dos dentes na arcada dentária, sempre que uma pessoa desenvolve má formação nas estruturas bucais e/ou faciais.</p>
                    </Tratamentos>
                    <Tratamentos>
                        <img src={clareamento}
                            alt="clareamento"
                            width="15%" />
                        <h3> Clareamento </h3>
                        <p>O clareamento dental é uma microlimpeza da estrututura do dente. Por causa de pigmentos externos, com o passar do tempo, o dente fica com uma cor mais amarelada. Seu tratamento é indicado para quem busca um belo sorriso.</p>
                    </Tratamentos>
                    <Tratamentos>
                        <img src={implante}
                            alt="implante"
                            width="15%" />
                        <h3> Implantes </h3>
                        <p>O implante dentário é um procedimento em que um pino de titânio é utilizado para substituir a raiz do dente. Ele é fixado ao osso por meio de uma cirurgia e, após a integração óssea, é feita a colocação da prótese definitiva.</p>
                    </Tratamentos>
                </Wrapper>
            </Container>
        </AnimationOnScroll>
    )
}



export default Section03;