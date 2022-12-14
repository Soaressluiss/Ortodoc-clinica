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
                <h2>Not??cias do Dia </h2>
                <ul>
                    <li>
                        <h3>Dentes entortam na fase adulta?</h3>
                        <p>Muito al??m da quest??o est??tica, dentes alinhados cumprem uma boa fun????o na sa??de da boca e do corpo de um modo geral. Entre os problemas bucais causados pelos dentes tortos est?? a dificuldade de mastiga????o, a altera????o da fon??tica e a respira????o pela boca, que ocasiona problemas na gengiva, l??ngua e mau h??lito. Para evitar esses problemas na fase adulta, ?? recomend??vel que a denti????o seja corrigida ainda na inf??ncia por meio de aparelhos ortod??nticos. Al??m disso, hoje em dia existem in??meras op????es discretas para quem deseja corrigir o sorriso depois de grandinho.</p>
                        <p>Site Terra</p>
                        <p>2022</p>
                        <ButtonLink>
                            <a href="https://www.terra.com.br/vida-e-estilo/saude/saude-bucal/saude/dentes-entortam-na-fase-adulta-entenda-como-a-denticao-pode-mudar,a2446a1a1e9b226dde475ec8b3ec011b82x56hew.html" target="_blank" rel='noreferrer'> Acesse a not??cia</a>
                        </ButtonLink>
                    </li>
                    <li>
                        <h3>F??ssil de criatura que parece uma ???l??ngua com dentes??? ?? encontrado bem preservado</h3>
                        <p>Um f??ssil encontrado em Montana, nos Estados Unidos, pertence a uma esp??cie de animal que se parece com um tipo de molusco que possui uma ???l??ngua com dentes??? dentro de seu intestino. Segundo o artigo publicado na revista Biology Letters, a criatura estava em bom estado de conserva????o, algo que surpreendeu os pesquisadores. A partir das observa????es iniciais, os cientistas acreditam que o f??ssil pertence a uma esp??cie de Tifloesus, que viveu durante o per??odo Carbon??fero, entre 358,9 milh??es e 289,9 milh??es de anos atr??s. Esse esp??cime n??o foi classificado em nenhum grupo de animais, por falta de mais detalhes dos f??sseis.</p>
                        <p>Olhar Digital</p>
                        <p>2022</p>
                        <ButtonLink>
                            <a href="https://olhardigital.com.br/2022/09/21/ciencia-e-espaco/fossil-de-criatura-que-parece-uma-lingua-com-dentes-e-encontrado-bem-preservado-confira/" target="_blank" rel='noreferrer'> Acesse a not??cia</a>
                        </ButtonLink>
                    </li>
                    <li>
                        <h3>Aparelho invis??vel: vale a pena investir no tratamento odontol??gico ???do futuro????</h3>
                        <p>Se voc?? j?? foi ao dentista e recebeu a not??cia que precisaria usar aparelho ortod??ntico, ?? poss??vel que tenha tido ressalvas a respeito. Afinal, o tratamento pode comprometer a est??tica do sorriso, dificultar a higieniza????o e aumentar a frequ??ncia de visitas ao consult??rio. Para eliminar essas desvantagens, entretanto, ?? que surgiram os alinhadores est??ticos. ???O principal diferencial desse tratamento ortod??ntico ?? a sua versatilidade. O alinhador invis??vel ?? remov??vel, mais confort??vel e mais pr??tico???, detalha M??rcio Ramos, dentista e fundador da IRio Odontologia. Segundo ele, ?? poss??vel fazer outros procedimentos dentais durante o uso dos alinhadores, o que tamb??m ?? um fator importante para o sucesso desse tipo de tratamento.</p>
                        <p>Site Terra</p>
                        <p>2022</p>
                        <ButtonLink>
                            <a href="https://istoe.com.br/tudo-sobre-aparelho-invisivel/" target="_blank" rel='noreferrer'> Acesse a not??cia</a>
                        </ButtonLink>
                    </li>
                    <li>
                        <h3>O sorriso da rainha Elizabeth: Descubra como a fam??lia real cuida dos dentes</h3>
                        <p>Muitos mist??rios e curiosidades rondam a fam??lia real, inclusive com rela????o ao cuidado com seus dentes. N??o ?? toa, a denti????o dos brit??nicos costuma ser alvo de coment??rios em filmes e no imagin??rio popular. Segundo reportagem do El Pa??s, o estere??tipo da m?? denti????o dos ingleses tem base hist??rica. At?? a primeira ter??a parte do s??culo 20, a higiene bucal era vista como algo exc??ntrico e, em geral, os dentes representavam um problema do qual era melhor se livrar o mais r??pido poss??vel. Voltando ao per??odo Tudor, registros apontam que do meio ao fim de seu reinado, Elizabeth I sofreu com dores de dente, causadas pela populariza????o do a????car. Em dezembro de 1578, quando a dor parecia n??o melhorar, ela finalmente aceitou a extra????o. Ap??s a remo????o de alguns de seus dentes, Elizabeth nunca mais apareceu em p??blico sem chuma??os de algod??o preenchendo os locais vazios.</p>
                        <p>Site Terra</p>
                        <p>2022</p>
                        <ButtonLink>
                            <a href="https://www.terra.com.br/vida-e-estilo/saude/saude-bucal/diversao/o-sorriso-da-rainha-elizabeth-descubra-como-a-familia-real-cuida-dos-dentes,f74ca52893f01f7153c9f1fb1cccf05f1tvdwqmb.html" target="_blank" rel='noreferrer'> Acesse a not??cia</a>
                        </ButtonLink>
                    </li>
                </ul>
            </Noticias>
            <Footer />
        </>
    )
}

export default Blog