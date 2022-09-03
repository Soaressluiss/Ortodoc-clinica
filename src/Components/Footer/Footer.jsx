import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/img/logo.png"
import { colorPrimary, colorSecundary } from '../../variaveis';


const Wrapper = styled.footer`
    display: grid;
    justify-content: space-evenly;
    grid-template-areas: "l s  c "
                        "  i i i ";
    margin: 2rem;

`
const LogoAndMsg = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: l;
    align-items: center;
    align-content: flex-end;
    p {
        width: 50%;
        color: ${colorSecundary};
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size:.7rem;
    }

`
const ServicoContainer = styled.div`
    grid-area: s;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 1.3rem;
        color: ${colorPrimary};
        text-transform: uppercase;
        font-family: 'Rubik', sans-serif;
        font-weight: bold;
    }
    li{
        font-family: 'Heebo', sans-serif;
        color: ${colorSecundary};
        font-weight: bold;
        list-style: none;
        padding: .3rem 0;
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
`
const Footer = () => {
    return (
        <>
            <Wrapper>
                <LogoAndMsg>
                    <img
                        src={logo}
                        width="10%"
                        alt="logo do footer" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure suscipit magnam deserunt mollitia eligendi, vel omnis blanditiis quis, odio inventore optio sed? Ipsa explico?</p>
                </LogoAndMsg>
                <ServicoContainer>
                    <p>Serviços</p>
                    <ul>
                        <li>Clareamento</li>
                        <li>Restauração</li>
                        <li>Ortodontia</li>
                        <li>Implantes Dentários</li>
                    </ul>
                </ServicoContainer>
                <ContatosContainer>
                    <p>Contato</p>
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
                <p>Feito com <img src="" alt="" /></p>
                <a href="d" target="_blank"> Github Luís</a>
                <a href="a" target="_blank"> Linkedin Luís</a>
            </Information>
        </>
    )
}

export default Footer;