import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface iSobre {
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

export function IcSobre (props: iSobre) {
  return(
    <StyleHeaderItem onClick={props.aoClicar}>
      <InfoOutlinedIcon />
      {props.texto}
    </StyleHeaderItem>
  )
}