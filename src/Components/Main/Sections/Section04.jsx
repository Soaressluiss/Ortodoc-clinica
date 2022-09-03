import React from 'react';
import { colorPrimary, colorSecundary } from '../../../variaveis';
import boy1 from "../../../assets/img/boy1.jpg"
import girl from "../../../assets/img/girl.jpg"
import boy2 from "../../../assets/img/boy2.jpg"
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin: 1rem 4rem;
    h2{
        margin: 1rem auto;
        color: ${colorPrimary};
        font-weight: bold;
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;


    }
`
const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        -webkit-box-shadow: 3px 11.5px 17.5px 5px #ddd;
        -moz-box-shadow: 3px 11.5px 17.5px 5px #ddd;
        box-shadow: 3px 11.5px 17.5px 5px #ddd;
        display: flex;
        padding: 0.6rem;
        border-radius: 10px; 
    }
`
const Comentario = styled.p`
    font-family: 'Poppins', sans-serif;
    color: ${colorSecundary};
    text-align: justify;
    font-size: .8rem;
`
const NameCliente = styled.p`
    color: ${colorPrimary};
    font-family: 'Rubik', sans-serif;
    font-size: 1.3rem;
`
const Cliente = styled.img`
    width: 40%;
    border-radius: 50%;
`




const Section04 = () => {
    return (
        <Container>
            <h2> Veja algumas avaliações de nossos clientes</h2>
            <Section>
                <div>
                    <Cliente src={boy1} alt="cliente numero 1" />
                    <NameCliente>Pedro Carlos Sobrinho - Niterói - RJ</NameCliente>
                    <Comentario>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptatum explicabo quam saepe optio sint porro necessitatibus laborum, fugit adipisci impedit officiis</Comentario>
                </div>
                <div>
                    <Cliente src={girl} alt="cliente numero 2" />
                    <NameCliente>Ana Clara Fonseca - São Paulo - SP</NameCliente>
                    <Comentario>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptatum explicabo quam saepe optio sint porro necessitatibus laborum, fugit adipisci impedit officiis</Comentario>
                </div>
                <div>
                    <Cliente src={boy2} alt="cliente numero 3" />
                    <NameCliente>Reinaldo Barros - Salvador - BA </NameCliente>
                    <Comentario>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptatum explicabo quam saepe optio sint porro necessitatibus laborum, fugit adipisci impedit officiis</Comentario>
                </div>
            </Section>
        </Container>
    )
}

export default Section04;