import styled from "styled-components"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

interface iHeader {
  aoClicar: () => void;
  sobre: string;
  projetos: string;
  comentarios: string;
  contato: string
}

const StyleHeader = styled.div`
  display: flex;
  align-items:center;
  height: 5vh;
  justify-content: flex-end   ;
  margin: 0;
  padding: 0;
`
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

export function Header (props: iHeader) {
  return(
    <StyleHeader>
      <StyleHeaderItem onClick={props.aoClicar}>
          <InfoOutlinedIcon />
          {props.sobre}
      </StyleHeaderItem>
      <StyleHeaderItem onClick={props.aoClicar}>
          <AccountTreeOutlinedIcon />
          {props.projetos}
      </StyleHeaderItem>
      <StyleHeaderItem onClick={props.aoClicar}>
          <InsertCommentOutlinedIcon />
          {props.comentarios}
      </StyleHeaderItem>
      <StyleHeaderItem onClick={props.aoClicar}>
          <ConnectWithoutContactOutlinedIcon />
          {props.contato}
      </StyleHeaderItem>
    </StyleHeader>
  )
}