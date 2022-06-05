import styled from 'styled-components';

const StyleApresentacao = styled.div`
    display: flex;
    align-items:center;
    height: 100vh;
    width: 100vw;
    background-color: #F56820;
`

const StyleNome = styled.h1`
    color: black;
    font-family: 'Tai Heritage Pro', serif;
`

const StyleFoto = styled.div`
    height: 300px;
    width: 300px;
    background-image: url(${props => props.imagem});
    background-size:cover;
    
`

export function Apresentacao (props) {
    return(
        <StyleApresentacao>
            <StyleNome>
                {props.nome}
            </StyleNome>
            <StyleFoto imagem={props.imagem} />
        </StyleApresentacao>
    )
}