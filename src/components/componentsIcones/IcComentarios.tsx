import styled from 'styled-components'
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

interface iComentarios {
  texto: string;
  aoClicar: () => void
}

const StyleHeaderItem = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 20px;
  color: white;
  font-size: 18px;
  margin-top: 10px;
  background-color:unset;
  border:unset;
`

export function IcComentarios (props: iComentarios) {
  return(
    <StyleHeaderItem onClick={props.aoClicar}>
      <InsertCommentOutlinedIcon />
      {props.texto}
    </StyleHeaderItem>
  )
}