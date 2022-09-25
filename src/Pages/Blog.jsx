import React from 'react'
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
    return (
        <>
            <Header />
            <Noticias>
                <h2>Notícias do Dia </h2>
                <ul>
                    <li>
                        <h3>Dentes entortam na fase adulta?</h3>
                        <p>Muito além da questão estética, dentes alinhados cumprem uma boa função na saúde da boca e do corpo de um modo geral. Entre os problemas bucais causados pelos dentes tortos está a dificuldade de mastigação, a alteração da fonética e a respiração pela boca, que ocasiona problemas na gengiva, língua e mau hálito. Para evitar esses problemas na fase adulta, é recomendável que a dentição seja corrigida ainda na infância por meio de aparelhos ortodônticos. Além disso, hoje em dia existem inúmeras opções discretas para quem deseja corrigir o sorriso depois de grandinho.</p>
                        <p>Site Terra</p>
                        <p>2022</p>
                        <ButtonLink>
                            <a href="https://www.terra.com.br/vida-e-estilo/saude/saude-bucal/saude/dentes-entortam-na-fase-adulta-entenda-como-a-denticao-pode-mudar,a2446a1a1e9b226dde475ec8b3ec011b82x56hew.html" target="_blank" rel='noreferrer'> Acesse a notícia</a>
                        </ButtonLink>
                    </li>
                    <li>
                        <h3>Fóssil de criatura que parece uma “língua com dentes” é encontrado bem preservado</h3>
                        <p>Um fóssil encontrado em Montana, nos Estados Unidos, pertence a uma espécie de animal que se parece com um tipo de molusco que possui uma “língua com dentes” dentro de seu intestino. Segundo o artigo publicado na revista Biology Letters, a criatura estava em bom estado de conservação, algo que surpreendeu os pesquisadores. A partir das observações iniciais, os cientistas acreditam que o fóssil pertence a uma espécie de Tifloesus, que viveu durante o período Carbonífero, entre 358,9 milhões e 289,9 milhões de anos atrás. Esse espécime não foi classificado em nenhum grupo de animais, por falta de mais detalhes dos fósseis.</p>
                        <p>Olhar Digital</p>
                        <p>2022</p>
                        <ButtonLink>
                            <a href="https://olhardigital.com.br/2022/09/21/ciencia-e-espaco/fossil-de-criatura-que-parece-uma-lingua-com-dentes-e-encontrado-bem-preservado-confira/" target="_blank" rel='noreferrer'> Acesse a notícia</a>
                        </ButtonLink>
                    </li>
                    <li>
                        <h3>Aparelho invisível: vale a pena investir no tratamento odontológico ‘do futuro’?</h3>
                        <p>Se você já foi ao dentista e recebeu a notícia que precisaria usar aparelho ortodôntico, é possível que tenha tido ressalvas a respeito. Afinal, o tratamento pode comprometer a estética do sorriso, dificultar a higienização e aumentar a frequência de visitas ao consultório. Para eliminar essas desvantagens, entretanto, é que surgiram os alinhadores estéticos. “O principal diferencial desse tratamento ortodôntico é a sua versatilidade. O alinhador invisível é removível, mais confortável e mais prático”, detalha Márcio Ramos, dentista e fundador da IRio Odontologia. Segundo ele, é possível fazer outros procedimentos dentais durante o uso dos alinhadores, o que também é um fator importante para o sucesso desse tipo de tratamento.</p>
                        <p>Site Terra</p>
                        <p>2022</p>
                        <ButtonLink>
                            <a href="https://istoe.com.br/tudo-sobre-aparelho-invisivel/" target="_blank" rel='noreferrer'> Acesse a notícia</a>
                        </ButtonLink>
                    </li>
                    <li>
                        <h3>O sorriso da rainha Elizabeth: Descubra como a família real cuida dos dentes</h3>
                        <p>Muitos mistérios e curiosidades rondam a família real, inclusive com relação ao cuidado com seus dentes. Não à toa, a dentição dos britânicos costuma ser alvo de comentários em filmes e no imaginário popular. Segundo reportagem do El País, o estereótipo da má dentição dos ingleses tem base histórica. Até a primeira terça parte do século 20, a higiene bucal era vista como algo excêntrico e, em geral, os dentes representavam um problema do qual era melhor se livrar o mais rápido possível. Voltando ao período Tudor, registros apontam que do meio ao fim de seu reinado, Elizabeth I sofreu com dores de dente, causadas pela popularização do açúcar. Em dezembro de 1578, quando a dor parecia não melhorar, ela finalmente aceitou a extração. Após a remoção de alguns de seus dentes, Elizabeth nunca mais apareceu em público sem chumaços de algodão preenchendo os locais vazios.</p>
                        <p>Site Terra</p>
                        <p>2022</p>
                        <ButtonLink>
                            <a href="https://www.terra.com.br/vida-e-estilo/saude/saude-bucal/diversao/o-sorriso-da-rainha-elizabeth-descubra-como-a-familia-real-cuida-dos-dentes,f74ca52893f01f7153c9f1fb1cccf05f1tvdwqmb.html" target="_blank" rel='noreferrer'> Acesse a notícia</a>
                        </ButtonLink>
                    </li>
                </ul>
            </Noticias>
            <Footer />
        </>
    )
}

export default Blog