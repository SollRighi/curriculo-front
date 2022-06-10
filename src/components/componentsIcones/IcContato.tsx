import styled from 'styled-components'
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

interface iContato {
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

export function IcContato (props: iContato) {
  return(
    <StyleHeaderItem href='#contato'>
      <ConnectWithoutContactOutlinedIcon />
      {props.texto}
    </StyleHeaderItem>
  )
}