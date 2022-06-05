import styled from 'styled-components';
import { Apresentacao } from './components/Apresentacao'
import sol from './components/imagens/sol.jpg'
// import { Sobre } from './components/Sobre'
// import { Projetos } from './components/Projetos'
// import { Comentarios } from './components/Comentarios'
// import { Contato } from './components/Contato'

 const StyleBody = styled.div`
  display: flex;
  flex-direction:column;
  height: 100vh;
  width: 100vw;
  
`

function App() {
  return (
    <StyleBody>
      <Apresentacao imagem={sol} nome={"Solange Vitoria P. Righi"} profissao="Desenvolverora Web Full Stack Junior"/>
      {/* <Sobre />
      <Projetos />
      <Comentarios />
      <Contato /> */}
    </StyleBody>
  );
}

export default App;
