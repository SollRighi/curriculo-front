import styled from "styled-components"

interface iProjetos {
  titulo: string;
}

const StyleProjetos = styled.div`
  //background-color: #fc4b2a;
  width: 100%;
  height:90vh;
  display:flex;
  flex-direction: column;
`

const StyleTitulo = styled.h1`
  font-family: 'Tai Heritage Pro', serif;
  font-size: 30px;
  color: white;
  text-align: center;
`

export function Projetos (props: iProjetos) {
  return (
    <StyleProjetos>
      <StyleTitulo> { props.titulo } </StyleTitulo>
    </StyleProjetos>
  )
}