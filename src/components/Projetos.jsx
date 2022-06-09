import styled from "styled-components"

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
const StyleItem = styled.div`
  width: 300px;
  height: 100px;
  background-color: white;
  margin: 50px;
`

export function Projetos (props) {
  return (
    <StyleProjetos>
      <StyleTitulo> { props.titulo } </StyleTitulo>
      <StyleItem> {props.item} </StyleItem>
    </StyleProjetos>
  )
}