import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/img/portrait-of-smiling-dentist-standing-with-arms-crossed-with-her-colleague-min.jpg'
import { colorPrimary } from '../../../variaveis';


const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-content: center;
    padding: 0 1.2rem;
    gap: 10rem;
`
const Tittle = styled.p`
    font-family: 'Heebo', sans-serif;
    color: ${colorPrimary};
    font-weight: bold;

`
const TittlePrincipal = styled(Tittle)`
    font-size: 2.5rem;
    margin:  0;
`
const Mensagem = styled(Tittle)`
    text-align: justify;
`
const Btn = styled.button`
    background-color: ${(color)=> (color || "red")};  // VERIFICAR ESSA PARTE DE HOVER DEPOIS 
    color: white;
    border: none;
    border-radius: 5px;
    padding: .7rem;
    cursor: pointer;

`
const Imagem = styled.img`
    border-radius: 10px;
`

const Section01 = () => {
    return (
        <Section>
            <div>
                <Tittle>Clinica Dentária</Tittle>
                <TittlePrincipal> Ortodoc </TittlePrincipal>
                <Mensagem>Desde de 2005 atendendo você e sua família com muito amor e cuidado, mudando sorrisos e vidas! </Mensagem>
                <Btn color="#1c6dd6"> Saiba mais!</Btn>
            </div>
            <Imagem src={Image}
                alt="portrait-of-smiling-dentist-standing-with-arms-crossed-with-her-colleague-min"
                width='40%' />
        </Section>
    )
}

export default Section01;