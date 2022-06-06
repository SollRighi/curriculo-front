import { TextField } from "@mui/material"
import styled from "styled-components"

const StyleContato = styled.div`
  
`

export function Contato () {
  return(
    <StyleContato>
      <div>
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
      </div>
      <TextField
        required
        id="outlined-required"
        label="E-mail"
        defaultValue=""
      />
    </StyleContato>
  )
}