import { Button, TextField } from "@mui/material"
import styled from "styled-components"

interface iTituloContato {
  titulo: string
}

const StyleContato = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
const StyleTituloContato = styled.div`
  font-family: 'Tai Heritage Pro', serif;
  font-size: 25px;
  color: white;
  margin-top: 30px;
  margin-left: 50px;
`

export function Contato (props: iTituloContato) {
  return(
    <StyleContato>
      <StyleTituloContato>
        {props.titulo}
      </StyleTituloContato>
      <TextField
        required
        id="outlined-required"
        label="Nome completo"
        defaultValue=""
      />
      <TextField
        required
        id="outlined-required"
        label="Numero de Telefone"
        defaultValue=""
      />
      <TextField
        required
        id="outlined-required"
        label="E-mail"
        defaultValue=""
      />
      <Button 
        variant="outlined"> Enviar
      </Button>
    </StyleContato>
  )
}