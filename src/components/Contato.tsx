import { Button, TextField } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"

interface iTituloContato {
  titulo: string
  aoClicar: (nomeContato: string, numeroContato: string, emailContato: string) => void
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

  const [nomeContato, setNomeContato] = useState("")
  const [numeroContato, setNumeroContato] = useState("")
  const [emailContato, setEmailContato] = useState("")

  return(
    <StyleContato id="contato">
      <StyleTituloContato>
        {props.titulo}
      </StyleTituloContato>
      <TextField
        required
        id="outlined-required"
        label="Nome completo"
        defaultValue=""
        value={nomeContato}
        onChange={((e) => setNomeContato(e.target.value))}
      />
      <TextField
        required
        id="outlined-required"
        label="Numero de Telefone"
        defaultValue=""
        value={numeroContato}
        onChange={((e) => setNumeroContato(e.target.value))}
      />
      <TextField
        required
        id="outlined-required"
        label="E-mail"
        defaultValue=""
        value={emailContato}
        onChange={((e) => setEmailContato(e.target.value))}
      />
      <Button 
        variant="outlined" 
        onClick={() => 
          props.aoClicar(nomeContato, numeroContato, emailContato)}
      > Enviar
      </Button>
    </StyleContato>
  )
}