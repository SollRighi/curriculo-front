import styled from "styled-components"

const StyleHistoricoComentarios = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  //background-color: #f7a48b;
  color: white;
`

export function HistoricoComentarios (props) {
  return(
    <StyleHistoricoComentarios>
      {props.itemHistoricoComentario}
    </StyleHistoricoComentarios>
  )
}