import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"

interface iProjetos {
  titulo: string;
}

const StyleProjetos = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
`
const StyleTitulo = styled.h1`
  font-family: 'Tai Heritage Pro', serif;
  font-size: 30px;
  color: white;
  text-align: center;
  margin-bottom: 100px;
`
const StyleGridProjetos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content:center;
  gap: 30px;
  margin-bottom: 100px;
  margin-left: 50px;
  margin-right: 50px;
`
const StyleItemGrid = styled.a`
  padding: 20px; 
  border-radius: 10px;
  color: white;
  box-shadow: 4px 4px 4px 2px rgba(248, 248, 248, 0.2); 
`

export function Projetos (props: iProjetos) {

  const [projetos, setProjetos] = useState<any[]>([])

  function buscaProjetos () {
    axios.get('https://api.github.com/users/SollRighi/repos?sort=last-updated')
    .then((res) => {
      setProjetos(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      alert(err.response.data)
  })
  }
  
  useEffect(() => {buscaProjetos()}, [])

  return (
    <StyleProjetos id="projetos">
      <StyleTitulo> { props.titulo } </StyleTitulo>
      <StyleGridProjetos>
      {projetos.map( (projeto) => 
        <StyleItemGrid href={projeto.html_url} target="_blank"> {projeto.name} </StyleItemGrid>
      
      )}
      </StyleGridProjetos>
    </StyleProjetos>
  )
}