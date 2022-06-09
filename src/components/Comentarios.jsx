import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { Button } from "@mui/material";

const StyleBodyCriaComentario = styled.div`
  width:30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 150px;
`
const StyleTitulo = styled.h1`
  font-family: 'Tai Heritage Pro', serif;
  font-size: 25px;
  color: white;
  margin-top: 30px;
  margin-left: 50px;
`
export function Comentarios (props) {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return(
    <StyleBodyCriaComentario>
      <StyleTitulo> 
        {props.titulo1} 
      </StyleTitulo>
      <TextField
          id="outlined-multiline-flexible"
          label="Nome"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Deixei o seu comentário:"
          multiline
          rows={4}
          defaultValue=""
        />
        <Button 
          variant="outlined"> Enviar
        </Button>
        <StyleTitulo> 
          {props.titulo2} 
        </StyleTitulo>
    </StyleBodyCriaComentario>
  )
}