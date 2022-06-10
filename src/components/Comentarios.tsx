import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { Button, } from "@mui/material";
import { styled as styledMui } from "@mui/material/styles";

interface iTituloComentario {
  titulo: string;
  aoClicar: (nome: string, comentario: string) => void;
}

const StyleBodyCriaComentario = styled.div`
  width:30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 80px;
`
export const StyleTitulo = styled.p`
  font-family: 'Tai Heritage Pro', serif;
  font-size: 25px;
  color: white;
  margin-top: 30px;
  margin-left: 50px;
`

export const TextFieldStyled = styledMui(TextField)(() => ({
  input: {
    color: 'white',
    '&::placeholder': {
      color: 'white',
    }
  },
  textarea: {
    color: 'white'
  },
  fieldset: {
    borderColor: 'white',
    '&:hover': {
      borderColor: 'white',
    }
  }
}))

export function Comentarios (props: iTituloComentario) {

  const [nome, setNome] = useState("")
  const [comentario, setComentario] = useState("")

  function limparCampoComentario () {
    setNome("")
    setComentario("")
  }

  return(
    <StyleBodyCriaComentario id="comentario">
      <StyleTitulo> 
        {props.titulo} 
      </StyleTitulo>
        <TextFieldStyled
          id="outlined-multiline-flexible"
          label="Nome"
          value={nome}
          onChange={((e) => setNome(e.target.value))}
        />
        <TextFieldStyled
          id="outlined-multiline-static"
          label="Deixei o seu comentário:"
          multiline
          rows={4}
          value={comentario}
          onChange={((e) => setComentario(e.target.value))}
        />
        <Button 
          variant="outlined" 
          onClick={() => {
            props.aoClicar(nome, comentario)
            limparCampoComentario()
          }}> Enviar
        </Button>
    </StyleBodyCriaComentario>
  )
}