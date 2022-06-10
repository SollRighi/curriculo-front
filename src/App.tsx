import styled from 'styled-components';
import { Apresentacao } from './components/Apresentacao'
import sol from './components/imagens/sol.jpg'
import { Sobre } from './components/Sobre';
import { Projetos } from './components/Projetos';
import { Comentarios, StyleTitulo } from './components/Comentarios';
import { Contato } from './components/Contato';
import {IcSobre} from './components/componentsIcones/IcSobre';
import {IcProjetos} from './components/componentsIcones/IcProjetos';
import {IcContato} from './components/componentsIcones/IcContato';
import {IcComentarios} from './components/componentsIcones/IcComentarios';
import { useEffect, useState } from 'react';
import axios from 'axios';

const urlBack = "https://curriculo-growdev.herokuapp.com"
// const urlBack = "http://localhost:8000"

const StyleBody = styled.div`
  display: flex;
  flex-direction:column;
  /* width: 100vw; */
  position: relative;
  background: #190A05;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #870000,#190A05);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #870000, #190A05); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



`
const StyleDinamico = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
  gap: 100px;
`
const StyleHeader = styled.div`
  display: flex;
  align-items:center;
  height: 5vh;
  justify-content: flex-end   ;
  margin: 0;
  padding: 0;
`
const StyleHistoricoComentarios = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;
  gap: 50px;
  align-items: center;
`
const StyleCardComentario = styled.div`
  width: 300px;
  padding: 20px; 
  border-radius: 10px;
  color: white;
  box-shadow: 4px 4px 4px 2px rgba(248, 248, 248, 0.2);
  h3 {
    margin-left:0;
    margin-right:0;
    margin-top:0;
    margin-bottom:10px;
  }
`
const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: 340px 340px;
  justify-content:center;
  gap: 80px;
`

interface iComentario {
  nome: string;
  comentario: string
}

function App() {

  const [comentarios, setComentarios] = useState<iComentario[]>([])

  function buscaComentarios () {
    axios.get(`${urlBack}/comentarios`)
      .then((res) => {
        setComentarios(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        alert(err.response.data)
    })
  }
  
  useEffect(() => {
    buscaComentarios()
  }, [])

  function salvarComentario (nome: string, comentario: string) {
    
    axios.post(`${urlBack}/comentario`, {
      nome: nome,
      comentario: comentario

    }).then((res) => {
      console.log(res);
 
      buscaComentarios()
      alert(res.data)

    }).catch((err) => {
        alert(err.response.data)
    })
  }

  function salvarContato (nomeContato: string, numeroContato: string, emailContato: string, mensagemContato: string) {
    axios.post(`${urlBack}/contato`, {
      nome: nomeContato, 
      telefone: numeroContato,
      email: emailContato, 
      mensagem: mensagemContato, 
  
    }).then((res) => {
      console.log(res)
      alert(res.data)
  
    }).catch((err) => {
      alert(err.response.data)
    })
  }

  return (
    <StyleBody>
      <StyleHeader>
        <IcSobre texto="Sobre" />
        <IcProjetos texto="Projetos" />
        <IcContato texto="Contato" />
        <IcComentarios texto="Comentarios" />
      </StyleHeader>
      <Apresentacao 
        imagem={sol} 
        nome={"Solange Vitoria P. Righi"} 
        profissao="Desenvolvedora Web Full Stack Junior"
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
          titulo="Comentarios:"
          aoClicar={(nome, comentario) => salvarComentario(nome, comentario)}
        />
        <Contato 
          titulo="Deixe o seu contato:"
          aoClicar={(nomeContato, numeroContato, emailContato, mensagemContato) => salvarContato(nomeContato, numeroContato, emailContato, mensagemContato)}
        />
      </StyleDinamico>
      <StyleHistoricoComentarios id="historicoComentarios">
        <StyleTitulo>
          Historico de Comentários:
        </StyleTitulo>
        <StyleGrid>
          {comentarios.map(
            (comentario) => <StyleCardComentario>
              <h3>{comentario.nome}</h3>
              {comentario.comentario}
            </StyleCardComentario>
          )}
        </StyleGrid>
      </StyleHistoricoComentarios>
    </StyleBody>
  );
}

export default App;
