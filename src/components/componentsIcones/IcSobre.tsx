import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface iSobre {
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

export function IcSobre (props: iSobre) {
  return(
    <StyleHeaderItem href='#sobre'>
      <InfoOutlinedIcon />
      {props.texto}
    </StyleHeaderItem>
  )
}