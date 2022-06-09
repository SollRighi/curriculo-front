import styled from 'styled-components';
import { Apresentacao } from './components/Apresentacao'
import sol from './components/imagens/sol.jpg'
import { Sobre } from './components/Sobre';
import { Projetos } from './components/Projetos';
import { Comentarios } from './components/Comentarios';
import { Contato } from './components/Contato';
import { HistoricoComentarios } from './components/HistoricoComentarios';

const StyleBody = styled.div`
  display: flex;
  flex-direction:column;
  /* width: 100vw; */
  position: relative;
  background: #200122;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #6f0000, #200122);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #6f0000, #200122); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`
const StyleDinamico = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  //background-color: #f7a48b;
  gap: 300px;
`

function App() {
  return (
    <StyleBody>
      <Apresentacao 
        imagem={sol} 
        nome={"Solange Vitoria P. Righi"} 
        profissao="Desenvolverora Web Full Stack Junior"
        sobre="Sobre"
        projetos="Projetos"
        comentarios="Comentarios"
        contato="Contato"
      />
      <Sobre 
        texto="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        Prazer, Solange&#10;.&emsp;Sou uma desenvolvedora web Full Stack Junior e estou me especializando 
        em React.js, curso desenvolvimento web full stack na Growdev à 11 meses, atualmente trabalho no setor administrativo
        da empresa Divina Terra e estou em busca de uma oportunidade na área do desenvolvimento tanto front-end
        quanto back-end.&#10;.&emsp;Quando desenvolvo um projeto busco elaborar códigos limpos e reutilizáveis, sempre 
        estudando a melhor tecnologia, o melhor método para a situação e também para as possíveis manutenções que 
        poderão surgir conforme o tempo.&#10;.&emsp;Tenho muita facilidade em me integrar em novas equipes e novos
        projetos, bem como aprender novas tecnologias e estruturas, afinal, gosto de desafios."
      />
      <Projetos 
        titulo="Projetos do GitHub"
        //item
      />
      <StyleDinamico>
        <Comentarios 
          titulo1="Comentarios:"
        />
        <Contato 
          tituloContato="Deixe o seu contato:"
        />
      </StyleDinamico>
      <HistoricoComentarios itemHistoricoComentario="oi"/>
    </StyleBody>
  );
}

export default App;
