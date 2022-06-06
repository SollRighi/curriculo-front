import styled from 'styled-components';
import { Apresentacao } from './components/Apresentacao'
import sol from './components/imagens/sol.jpg'
import { Sobre } from './components/Sobre';
// import { Projetos } from './components/Projetos'
// import { Comentarios } from './components/Comentarios'
// import { Contato } from './components/Contato'

 const StyleBody = styled.div`
  display: flex;
  flex-direction:column;
  /* width: 100vw; */
  position: relative;
  
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
      <Sobre texto="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      Prazer, Solange&#10;.&emsp;Sou uma desenvolvedora web Full Stack Junior e estou me especializando 
      em React.js, curso desenvolvimento web full stack na Growdev à 11 meses, atualmente trabalho no setor administrativo
      da empresa Divina Terra e estou em busca de uma oportunidade na área do desenvolvimento tanto front-end
      quanto back-end.&#10;.&emsp;Quando desenvolvo um projeto busco elaborar códigos limpos e reutilizáveis, sempre 
      estudando a melhor tecnologia, o melhor método para a situação e também para as possíveis manutenções que 
      poderão surgir conforme o tempo.&#10;.&emsp;Tenho muita facilidade em me integrar em novas equipes e novos
      projetos, bem como aprender novas tecnologias e estruturas, afinal, gosto de desafios."/>
      {/* <Projetos />
      <Comentarios />
      <Contato /> */}
    </StyleBody>
  );
}

export default App;
