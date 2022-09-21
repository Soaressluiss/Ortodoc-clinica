import React from 'react';
import { colorPrimary } from '../../../variaveis';
import imagem02 from "../../../assets/img/dentist-doing-a-check-up-on-the-patient-min.jpg"
import styled from 'styled-components';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Section = styled.div`
    margin: 8rem 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
@media screen and (max-width: 768px){
        gap: 0rem;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    
    }
`
const Infos = styled.div`
    text-align: justify;
`
const Title = styled.p`
    color: #4A9AE9;
    font-weight: bold;
    font-size: 1.9rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: .8rem;

@media screen and (max-width: 768px){
    font-size: 1.3rem;
    margin-bottom: .4rem;
    }

`
const Msg = styled.p`
    color: ${colorPrimary};
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 1.8rem;
    font-family: 'Noto Sans JP', sans-serif;
@media screen and (max-width: 768px){
    font-size: 1.2rem;
    margin-top: 1.2rem;
    }

`
const NameCLinica = styled.span`
    color: ${colorPrimary};
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
@media screen and (max-width: 768px){
    font-size: .8rem;
    }
    
`

export const Imagem = styled.img`
    border-radius: 10px;
    box-shadow: 1px 1px 5px black;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

const Section02 = () => {
    return (
        <Section>
            <AnimationOnScroll animateIn='animate__fadeInLeft'>
                <Imagem src={imagem02}
                    alt="dentista e paciente fazendo tratamento"
                    width="90%" />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn='animate__fadeInRight'>
                <Infos>
                    <Title>Sempre com os melhores profissonais para atende-lo.</Title>
                    <Msg> Com mais de 10 anos de experiência no mercado em todas as áreas da ortodontia, a <NameCLinica>ORTODOC</NameCLinica> possui profissionais altamente qualificados para cuidar melhor do seu sorriso e da sua família.</Msg>
                    <Msg> venha nos conhecer e marcar uma avaliação.</Msg>
                </Infos>
            </AnimationOnScroll>
        </Section>


    )

}



export default Section02;
