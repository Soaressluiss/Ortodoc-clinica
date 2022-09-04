import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/img/portrait-of-smiling-dentist-standing-with-arms-crossed-with-her-colleague-min.jpg'
import { colorPrimary } from '../../../variaveis';

const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 1.2rem;
    gap: 10rem;
    margin-top: 8.5rem;
`
const Tittle = styled.p`
    font-family: 'Heebo', sans-serif;
    color: ${colorPrimary};
    font-weight: bold;
    font-size: 1.3rem;
    margin:0;

`
const TittlePrincipal = styled(Tittle)`
    font-size: 2.5rem;
    margin:  0;
`
const Mensagem = styled(Tittle)`
    text-align: justify;
    font-size: 1.1rem;
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
export const Imagem = styled.img`
    border-radius: 10px;
    box-shadow: 1px 1px 5px black;

`

const Section01 = () => {

    return (
        <Section>
            <div>
                <Tittle>Clinica Odontológica</Tittle>
                <TittlePrincipal> Ortodoc </TittlePrincipal>
                <Mensagem>Desde de 2005 atendendo você e sua família com muito amor e cuidado,
                 mudando sorrisos e vidas! </Mensagem>
                <Btn> Saiba mais!</Btn>
            </div>
            <Imagem src={Image}
                alt="portrait-of-smiling-dentist-standing-with-arms-crossed-with-her-colleague-min"
                width='40%' />
        </Section>
    )
}

export default Section01;