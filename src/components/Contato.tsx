import { Button, TextField } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import { TextFieldStyled } from "./Comentarios"

interface iTituloContato {
  titulo: string
  aoClicar: (nomeContato: string, numeroContato: string, emailContato: string, mensagemContato: string) => void
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
const StyledInputContato = styled.div`
  display: flex;
  gap: 10px;
`

export function Contato (props: iTituloContato) {

  const [nomeContato, setNomeContato] = useState("")
  const [numeroContato, setNumeroContato] = useState("")
  const [emailContato, setEmailContato] = useState("")
  const [mensagemContato, setMensagemContato] = useState("")

  function limparContato () {
    setNomeContato("")
    setNumeroContato("")
    setNumeroContato("")
    setMensagemContato("")
  }

  return(
    <StyleContato id="contato">
      <StyleTituloContato>
        {props.titulo}
      </StyleTituloContato>
      <StyledInputContato>
        <TextFieldStyled
          required
          id="outlined-required"
          label="Nome completo"
          defaultValue=""
          value={nomeContato}
          onChange={((e) => setNomeContato(e.target.value))}
        />
        <TextFieldStyled
          required
          id="outlined-required"
          label="Numero de Telefone"
          defaultValue=""
          value={numeroContato}
          onChange={((e) => setNumeroContato(e.target.value))}
        />
        <TextFieldStyled
          required
          id="outlined-required"
          label="E-mail"
          defaultValue=""
          value={emailContato}
          onChange={((e) => setEmailContato(e.target.value))}
        />
      </StyledInputContato>
      <TextFieldStyled
          id="outlined-multiline-static"
          label="Deixe um recado se quiser:"
          multiline
          rows={4}
          value={mensagemContato}
          onChange={((e) => setMensagemContato(e.target.value))}
        />
      <Button 
        variant="outlined" 
        onClick={() => {
          props.aoClicar(nomeContato, numeroContato, emailContato, mensagemContato)
          limparContato()
        }}
      > Enviar
      </Button>
    </StyleContato>
  )
}