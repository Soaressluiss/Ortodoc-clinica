import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/img/logo.png"
import reactIcon from "../../assets/icons/react icon.svg"
import { colorPrimary, colorSecundary } from '../../variaveis';


const Wrapper = styled.footer`
    display: grid;
    justify-content: space-evenly;
    grid-template: auto / 1fr 1fr 1fr;
    grid-template-areas: "l s  c "
                        "  i i i ";
    margin: 8rem 2rem 4rem 2rem;
    
    border-top: 2px solid ${colorSecundary};
    border-bottom: 2px solid ${colorSecundary};
`
const LogoAndMsg = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: l;
    p {
    
        color: ${colorSecundary};
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size:1rem;
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
        font-family: 'Rubik', sans-serif;
        font-weight: bold;
    }
    li , a{
        font-family: 'Heebo', sans-serif;
        color: ${colorSecundary};
        font-weight: bold;
        list-style: none;
        padding: .3rem 0;
        text-decoration: none;
        cursor: pointer;
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
    gap: 1rem;
    h4, p{
        color: ${colorSecundary};
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }
    a {
        
        text-decoration: none;
        color: #00d9ff;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;

    }
    a:hover{
        color: ${colorPrimary};
        transition: 1s;
    }
`
const Footer = () => {
    return (
        <>
            <Wrapper>
                <LogoAndMsg>
                    <img
                        src={logo}
                        width="30%"
                        alt="logo do footer" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure suscipit magnam deserunt mollitia eligendi, vel omnis blanditiis quis, odio inventore optio sed? Ipsa explico?</p>
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
                        <li>Sua Rua, Brasil-SP</li>
                        <li>contatoortodoc@gmail.com</li>
                        <li>(00)123456789</li>
                        <li>(00)987654321</li>
                    </ul>
                </ContatosContainer>
            </Wrapper>
            <Information>
                <h4>Ortodoc 2022 &copy; todos direitos reservados </h4>
                <p>Feito com</p>
                <img
                    src={reactIcon}
                    width = "3%"
                    style={{color:"blue"}} 
                    alt=""
                    /> #TODO  {/* Arrumar aqui depois */}
                <a href="d" target="_blank"> Github Dev</a>
                <a href="a" target="_blank"> Linkedin Dev</a>
            </Information>
        </>
    )
}

export default Footer;