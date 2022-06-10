import styled from 'styled-components'
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

interface iComentarios {
  texto: string;
}

const StyleHeaderItem = styled.a`
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
    <StyleHeaderItem href='#historicoComentarios'>
      <InsertCommentOutlinedIcon />
      {props.texto}
    </StyleHeaderItem>
  )
}