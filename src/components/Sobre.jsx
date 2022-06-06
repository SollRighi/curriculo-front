import styled from "styled-components"

const StyleSobre = styled.div`
  display: flex;
  height: 85vh;
  //width: 100vw;
  justify-content: center;
  background-color:#c21b12;
`

const StyleTexto = styled.p`
  font-family: 'Tai Heritage Pro', serif;
  height: 800px;
  width: 800px;
  color: white;
  text-align: left;
  white-space: pre-line;
  font-size: 20px;
  line-height: 2.0;
  margin-top: 80px;
`

export function Sobre (props) {
  return(
    <StyleSobre>
      <StyleTexto>
        {props.texto}
      </StyleTexto>
    </StyleSobre>
  )
}