import styled from 'styled-components';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

const StyleApresentacao = styled.div`
    display: flex;
    align-items:center;
    height: 90vh;
    /* width: 100vw; */
    //background-color: #831818;
    justify-content: center;
    gap: 50px;
`

const StyleHeader = styled.div`
    display: flex;
    align-items:center;
    height: 5vh;
    /* width: 100%; */
    //background-color: #831818;
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
    background-image: url(${props => props.imagem});
    background-size:cover;
    border-radius: 150px;
`

export function Apresentacao (props) {
    return(
        <>
            <StyleHeader>
                <StyleHeaderItem>
                    <InfoOutlinedIcon />
                    {props.sobre}
                </StyleHeaderItem>
                <StyleHeaderItem>
                    <AccountTreeOutlinedIcon />
                    {props.projetos}
                </StyleHeaderItem>
                <StyleHeaderItem>
                    <InsertCommentOutlinedIcon />
                    {props.comentarios}
                </StyleHeaderItem>
                <StyleHeaderItem>
                    <ConnectWithoutContactOutlinedIcon />
                    {props.contato}
                </StyleHeaderItem>
            </StyleHeader>
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