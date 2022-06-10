import styled from "styled-components"

interface textoSobre {
  texto: string;
}

const StyleSobre = styled.div`
  display: flex;
  height: 85vh;
  justify-content: center;
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

export function Sobre (props: textoSobre) {
  return(
    <StyleSobre id="sobre">
      <StyleTexto>
        {props.texto}
      </StyleTexto>
    </StyleSobre>
  )
}