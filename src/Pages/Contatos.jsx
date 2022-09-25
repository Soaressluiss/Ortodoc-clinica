import React from 'react'
import styled from 'styled-components';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { FaTooth } from "react-icons/fa"
import { colorPrimary, colorSecundary } from '../variaveis';


const Section = styled.section`
    margin-top: 8rem;
    width: 100vw;
    background-color: #7fd0ee;
    display: flex;
    flex-direction: column;
    align-items: center;
    >h2{
        color: white;
        font-size: 2rem;
        font-family: 'Heebo', sans-serif;
    }
    > p{
        color: white;
        font-size: 1.2rem;
        font-family: 'Noto Sans JP', sans-serif;
        margin: 0;
        padding-bottom: 1rem;
    }
    @media screen and (max-width: 428px){
        text-align: center;
        margin-top: 6rem;
        h2{
            font-size: 1.4rem;
        }
        p{
            font-size: 1rem;
        }
    }

`
const SectionContato = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    margin: 1rem auto;
    border-radius: 15px;
    background-color: #7fd0ee;
    -webkit-box-shadow: 7px 1.5px 17.5px 1px #adabab;
    -moz-box-shadow: 7px 1.5px 17.5px 1px #adabab;
    box-shadow: 7px 1.5px 17.5px 1px #adabab;
    @media screen and (max-width: 428px){
        width: 16.5rem;
    }

    h3{
        font-size: 1.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: white;
        @media screen and (max-width: 428px){
            font-size: 1.3rem;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        gap: 1rem;
        width: 24rem;
        @media screen and (max-width: 428px){
            width: 13.4rem;
        }
    }
    label{
        color: white;
        font-family: 'Heebo', sans-serif; 
        font-size: 1.3rem;
        font-weight: bold;
        @media screen and (max-width: 428px){
            font-size: 1.1rem;
            text-align: center;
        }
    }
    input{
        width: inherit;
        padding: .7rem;
        border-radius: 10px;
        border: none;
    }
    textarea{
        border-radius: 10px;
        margin-bottom: 1rem;
        @media screen and (max-width: 428px){
            width: 14rem;
        }
    }
    button[type=submit]{
        background-color: ${colorPrimary};
        border-bottom: 1rem;
        padding: .7rem;
        border-radius: 10px;
        border: none;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-family: 'Heebo', sans-serif; 
        color: white;
        width: inherit;
        font-weight: 600;
        box-shadow: 1px 1px 4px black;
        letter-spacing: .2rem;
        &:hover{
            background-color: ${colorSecundary};
            transform: scale(1);
            transition: 1s ease;
            border: 1px #118ab2 solid;
            
        }
        @media screen and (max-width: 428px){
            padding: .3rem;
            width: 150px;
        }
    }
`

const Contatos = () => {

    const HandlerSubmit = (event) => {
        event.preventDefault();
        alert("Obrigado Pela mensagem! :)")
    }
    return (
        <>
            <Header />
            <Section>
                <h2>Nos envie uma Mensagem!</h2>
                <p>Para dúvidas ou surgestões entre em contato conosco 😄</p>
            </Section>
            <SectionContato>
                <h3> <FaTooth /> Insira seus dados: <FaTooth /></h3>
                <form onSubmit={HandlerSubmit} >
                    <label htmlFor="name"> <FaTooth />: Insira seu nome</label>
                    <input type="text" name="name" id="name" placeholder='João Silva' required />
                    <label htmlFor="email"><FaTooth />: Insira seu e-mail</label>
                    <input type="email" name="email" id="email" placeholder='Joaosilva@gmail.com' />
                    <label htmlFor="phone"><FaTooth />: Telefone</label>
                    <input type="number" name="phone" id="phone" placeholder='(99) 1234-5678' required />
                    <label htmlFor="msg"><FaTooth />: Insira sua dúvida ou sugestão</label>
                    <textarea name="msg" id="" cols="55" rows="10" placeholder='Olá, pessoal da Ortodoc 😄'></textarea>
                    <button type="submit">Enviar</button>
                </form>

            </SectionContato>
            <Footer />
        </>
    )
}

export default Contatos;