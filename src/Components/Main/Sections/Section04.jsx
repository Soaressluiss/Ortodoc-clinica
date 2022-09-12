import React from 'react';
import { colorPrimary, colorSecundary } from '../../../variaveis';
import boy1 from "../../../assets/img/boy1.jpg"
import girl from "../../../assets/img/girl.jpg"
import boy2 from "../../../assets/img/boy2.jpg"
import styled from 'styled-components';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Container = styled.section`
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin: 5rem 4rem;
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
const NameCliente = styled.p`
    color: ${colorPrimary};
    font-size: 1.2rem;
    font-family: 'Heebo', sans-serif;
    font-weight: bold;
`

const Comentario = styled.p`
    color: ${colorSecundary};
    font-family: 'Noto Sans JP', sans-serif;
    text-align: justify;
    font-size: 1.1rem;
`
const Cliente = styled.img`
    width: 40%;
    border-radius: 50%;
`

const Section04 = () => {
    return (
        <AnimationOnScroll animateIn='animate__slideInUp'>
            <Container>
                <h2> Veja algumas avaliações de nossos clientes</h2>
                <Section>
                    <div>
                        <Cliente src={boy1} alt="cliente numero 1" />
                        <NameCliente>Pedro Carlos Sobrinho - Niterói - RJ</NameCliente>
                        <Comentario>Com minha vida corrida, dificilmente sobra um tempinho para ir ao dentista, mas com várias filiais da Ortodoc na minha cidade não preciso me preocupar em perder tempo ao sair de casa. Obrigado Ortodoc! :)</Comentario>
                    </div>
                    <div>
                        <Cliente src={girl} alt="cliente numero 2" />
                        <NameCliente>Ana Clara Fonseca - São Paulo - SP</NameCliente>
                        <Comentario>Gosto bastante das instalações da clínica, sempre levo meu filho para avaliar como seus dentes estão, sempre fui muito bem recebida  por toda a equipe da clínica  Ortodoc. Me sinto muito acolhida a cada vez que vou lá.</Comentario>
                    </div>
                    <div>
                        <Cliente src={boy2} alt="cliente numero 3" />
                        <NameCliente>Reinaldo Barros - Salvador - BA </NameCliente>
                        <Comentario>Quando tive um problema com meus dentes no passado, fiquei bastante preocupado, mas o pessoal da Ortodoc foram muito receptivos comigo. Desde dessa época sempre faço uma visitinha, pois sei que lá serem bem acolhido.</Comentario>
                    </div>
                </Section>
            </Container>
        </AnimationOnScroll>
    )
}

export default Section04;