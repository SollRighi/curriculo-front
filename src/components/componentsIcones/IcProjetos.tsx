import styled from 'styled-components'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

interface iProjetos {
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

export function IcProjetos (props: iProjetos) {
  return(
    <StyleHeaderItem href='#projetos'>
      <AccountTreeOutlinedIcon />
      {props.texto}
    </StyleHeaderItem>
  )
}