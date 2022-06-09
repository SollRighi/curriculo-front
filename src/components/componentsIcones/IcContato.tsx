import styled from 'styled-components'
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

interface iContato {
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

export function IcContato (props: iContato) {
  return(
    <StyleHeaderItem onClick={props.aoClicar}>
      <ConnectWithoutContactOutlinedIcon />
      {props.texto}
    </StyleHeaderItem>
  )
}