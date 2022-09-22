import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { colorPrimary, colorSecundary } from '../variaveis';


const Noticias = styled.section`
    width: 80vw;
    margin: 8rem auto 3rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
    color: ${colorPrimary};
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    margin: 0;
    text-align: center;
    @media screen and (max-width: 428px) {
        font-size: 2rem;
    }
    }
   ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
    padding-left: 0;

   }
   li {
    border-radius: 25px;
    -webkit-box-shadow: 3px 11.5px 17.5px 5px #ddd;
    -moz-box-shadow: 3px 11.5px 17.5px 5px #ddd;
    box-shadow: 3px 11.5px 17.5px 5px #ddd;
    padding:1rem;
    text-align: center;
   
    
    
}
   h3{
    font-family: 'Heebo', sans-serif;
    color: ${colorPrimary};
    font-weight: 900;
    font-size: 1.4rem;
    width: 100%;
    background-color: #5dfcfc;
    padding: .6rem 0;
    border-radius: 10px;
    text-transform: uppercase;
    text-align: center;
    @media screen and (max-width: 428px) {
        font-size: 1.1rem;
    }
   }
   p{
    text-align: justify;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    color: ${colorSecundary};
    overflow-y: auto;
    font-size: 1.1rem;
    }

    @media screen and (max-width: 428px) {
        font-size: 1rem;
    }
   
`

const ButtonLink = styled.button`
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
        transition: 1s ease;
        transform: scale(1.1);
    }
    >a {
        text-decoration: none;
        color: white;

    }
`
const Blog = () => {

    const [Posts, setPosts] = useState([])
    const Url = "http://localhost:5000/noticias"

    const ObterDados = async () => {
        const dadosObtidos = await fetch(Url)
        const dadosConvertidos = await dadosObtidos.json()
        setPosts(dadosConvertidos)
    }
    useEffect(() => {
        ObterDados()
    }, [])

    return (
        <>
            <Header />
            <Noticias>
                <h2>Notícias do Dia </h2>
                <ul>
                    {Posts.map((blog) =>
                        <li key={blog.id}>
                            <h3>{blog.title}</h3>
                            <p>{blog.noticia}</p>
                            <p>{blog.autor}</p>
                            <p>{blog.date}</p>
                            <ButtonLink>
                                <a href={blog.link} target="_blank" rel='noreferrer'> Acesse a notícia</a>
                            </ButtonLink>
                        </li>
                    )}
                </ul>
            </Noticias>
            <Footer />
        </>
    )
}

export default Blog