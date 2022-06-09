import styled from 'styled-components';


interface iApresentacao {
    nome?: String;
    profissao?: String;
    imagem: string;
}

const StyleApresentacao = styled.div`
    display: flex;
    align-items:center;
    height: 90vh;
    justify-content: center;
    gap: 50px;
`
const StyleNome = styled.h1`
    color: white;
    width: 230px;
    font-family: 'Tai Heritage Pro', serif;
    text-shadow: 0.5em 0.5em 0.5em #181717;
    margin: 0;
    padding: 0;
    text-align: center;
`
const StyleProfissao = styled.h1`
    color: white;
    width: 230px;
    font-family: 'Tai Heritage Pro', serif;
    font-size: 20px;
    text-shadow: 0.5em 0.5em 0.5em #181717;
    margin: 0;
    padding: 0;
    text-align: center;
`
const StyleFoto = styled.div`
    height: 300px;
    width: 300px;
    background-image: url(${(props: iApresentacao) => props.imagem});
    background-size:cover;
    border-radius: 150px;
`

export function Apresentacao (props: iApresentacao) {
    return(
        <>
            
            <StyleApresentacao>
                <div>
                    <StyleNome>
                        {props.nome}
                    </StyleNome>
                    <StyleProfissao>
                        {props.profissao}
                    </StyleProfissao>
                </div>
                <StyleFoto imagem={props.imagem} />
            </StyleApresentacao>
        </>
    )
}