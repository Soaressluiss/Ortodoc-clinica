import React from 'react';
import { colorPrimary, colorSecundary } from '../../../variaveis';
import checapes from "../../../assets/icons/checapes.png"
import aparelho from "../../../assets/icons/aparelho.png"
import clareamento from "../../../assets/icons/clareamento.png"
import implante from "../../../assets/icons/implante.png"
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-content:center;
` 
const Tittle = styled.h2`
    margin: 1rem auto;
    color: ${colorPrimary};
    font-weight: bold;
    font-size: 2rem;

    `
const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
    text-align: justify;
    flex-wrap:nowrap;
    margin: 1rem 2.3rem;
`
const Tratamentos = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        color: ${colorPrimary};
        font-family: 'Rubik', sans-serif;
    }
    p{
        font-family: 'Poppins', sans-serif;
        color: ${colorSecundary};

    }
`



const Section03 = () => {
    return (
        <Container>
            <Tittle>Todo os tratamentos e cuidados para o seu sorriso.</Tittle>
            <Wrapper>
                <Tratamentos>
                    <img src={checapes} 
                    alt="implante"
                    width="15%" />
                    <h3> Implantes </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex minus, pariatur tempora officia voluptatum totam beatae voluptate iusto eum veritatis adipisci, facere maiores illum dolor ipsam iure quo. Quas!</p>
                </Tratamentos>
                <Tratamentos>
                    <img src={aparelho} 
                    alt="aparelho"
                    width="15%" />
                    <h3> Aparelho Dentário </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex minus, pariatur tempora officia voluptatum totam beatae voluptate iusto eum veritatis adipisci, facere maiores illum dolor ipsam iure quo. Quas!</p>
                </Tratamentos>
                <Tratamentos>
                    <img src={clareamento} 
                    alt="clareamento"
                    width="15%" />
                    <h3> Clareamento </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex minus, pariatur tempora officia voluptatum totam beatae voluptate iusto eum veritatis adipisci, facere maiores illum dolor ipsam iure quo. Quas!</p>
                </Tratamentos>
                <Tratamentos>
                    <img src={implante} 
                    alt="implante"
                    width="15%" />
                    <h3> Implantes </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex minus, pariatur tempora officia voluptatum totam beatae voluptate iusto eum veritatis adipisci, facere maiores illum dolor ipsam iure quo. Quas!</p>
                </Tratamentos>
            </Wrapper>
        </Container>
    )
}



export default Section03;