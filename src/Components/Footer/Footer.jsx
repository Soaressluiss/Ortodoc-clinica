import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/img/logo-blue.svg"
import { colorPrimary, colorSecundary } from '../../variaveis';
import { BsFacebook, BsFillHouseDoorFill, BsGlobe2, BsInstagram, BsTelephoneFill, BsTwitter, BsWhatsapp } from "react-icons/bs"
import { FaReact } from "react-icons/fa";

const Wrapper = styled.footer`
    display: grid;
    justify-content: space-evenly;
    grid-template: auto / 1fr 1fr 1fr;
    grid-template-areas: " r r r "
                        " l s  c "
                        "  i i i ";
    margin: 8rem 2rem 4rem 2rem;
    
    border-top: 2px solid ${colorSecundary};
    border-bottom: 2px solid ${colorSecundary};
`
const SocialMedias = styled.div`
    grid-area: r;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-content: center;
    p{
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        color: ${colorPrimary};
        font-family: 'Heebo', sans-serif;
    }
    ul {
        display: flex;
        gap: 2rem;
        list-style: none;
    }
    svg{
        color: ${colorSecundary};
        font-size: 1.4rem;
    }
    svg:hover{
        color: ${colorPrimary};
        transition: 1s;
    }
`
const LogoAndMsg = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: l;
    p {
    
        color: ${colorSecundary};
        font-weight: bold;
        font-family: 'Noto Sans JP', sans-serif;
        font-size:1.1rem;
        text-align: justify;
        @media screen and (max-width: 768px){
            font-size: .9rem;
        }
    }
    img{
        width:70%;
    }

`
const ServicoContainer = styled.div`
    grid-area: s;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        font-size: 1.3rem;
        color: ${colorPrimary};
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Heebo', sans-serif;
    }
    li , a{
        font-family: 'Noto Sans JP', sans-serif;
        color: ${colorSecundary};
        font-weight: bold;
        list-style: none;
        padding: .3rem 0;
        text-decoration: none;
        @media screen and (max-width: 768px){
            font-size: .9rem;
            margin: 0;
        }
    }
    a:hover {
        color: #08d4f8
    }
`
const ContatosContainer = styled(ServicoContainer)`
    grid-area: c;
`
const Information = styled.div`
    grid-area: i;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    h4, p{
        color: ${colorSecundary};
        font-weight: bold;
        font-family: 'Heebo', sans-serif;
    }
    
    svg{
        font-size: 1.8rem;
    }
`
const Footer = () => {
    return (
        <>
            <Wrapper>
                <SocialMedias>
                    <p>Nos encontre em nossas redes sociais</p>
                    <ul>
                        <li> <a href="/"> {<BsFacebook style={{ color: "#4267B2" }} />}</a> </li>
                        <li> <a href="/"> {<BsInstagram style={{ color: "#F56040" }} />}</a> </li>
                        <li> <a href="/"> {<BsTwitter style={{ color: "#1DA1F2" }} />}</a> </li>

                    </ul>
                </SocialMedias>
                <LogoAndMsg>
                    <img
                        src={logo}
                        alt="logo do footer" />
                    <p>Nós da ORTODOC, amamos o que fazemos e estamos sempre buscando entregar o melhor de mais moderno em Ortodontia.</p>
                    <p>ORTODOC seu sorriso é a nossa Alegria! &#128512;</p>
                </LogoAndMsg>
                <ServicoContainer>
                    <h3>Serviços</h3>
                    <ul>
                        <li><a href="/">Clareamento</a></li>
                        <li> <a href="/">Restauração</a></li>
                        <li><a href="/">Ortodontia</a></li>
                        <li><a href="/">Implantes Dentários</a></li>
                    </ul>
                </ServicoContainer>
                <ContatosContainer>
                    <h3>Contato</h3>
                    <ul>
                        <li> {<BsFillHouseDoorFill />}  Sua Rua nº00, Brasil - SP</li>
                        <li> {<BsGlobe2 />}  contatoortodoc@gmail.com</li>
                        <li>{<BsTelephoneFill />}  (00)123456789</li>
                        <li> {<BsWhatsapp />}  (00)987654321</li>
                    </ul>
                </ContatosContainer>
            </Wrapper>
            <Information>
                <h4> &copy; Ortodoc 2022 - todos direitos reservados </h4>
                <p>Feito com</p>
                <FaReact style={{ color: `${colorPrimary}` }} />
            </Information>
        </>
    )
}

export default Footer;