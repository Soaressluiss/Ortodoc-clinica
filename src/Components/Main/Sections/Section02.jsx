import React from 'react';
import { colorPrimary } from '../../../variaveis';
import imagem02 from "../../../assets/img/dentist-doing-a-check-up-on-the-patient-min.jpg"
import styled from 'styled-components';

const Section = styled.div`
    margin: 6rem 3.5rem;
    display: flex;
    gap: 2rem;
    align-items: center;
`
const Infos = styled.div`
    text-align: justify;
`
const Title = styled.p`
    color: #4A9AE9;
    font-weight: bold;
    font-size: 1.7rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: .8rem;

`
const Msg = styled.p`
    color: ${colorPrimary};
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1.8prem;
    font-family: 'Noto Sans JP', sans-serif;

`
const NameCLinica = styled.span`
    color: #013CC8;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;

`
export const Imagem = styled.img`
    border-radius: 10px;
    box-shadow: 1px 1px 5px black;

`

const Section02 = () => {
    return (
        <Section>
            <Imagem src={imagem02}
                alt="dentista e paciente fazendo tratamento"
                width="40%" />
            <Infos>
                <Title>Sempre com os melhores profissonais para atende-lo.</Title>
                <Msg> Com mais de 10 anos de experiência no mercado em todas as áreas da ortodontia, a <NameCLinica> ORTODOC </NameCLinica> possui profissionais altamente qualificados para cuidar melhor do seu sorriso e da sua família.</Msg>
                <Msg> venha nos conhecer e marcar uma avaliação.</Msg>
            </Infos>
        </Section>


    )

}



export default Section02;
