import styled from "styled-components";

const Opcoes = styled.li`
    display: flex;
    color: #FAF6F0;
    justify-content: center;
    align-items: center;
`

const Opcao = styled.ul`

`

const textoOpcoes = ['HOME', 'FAVORITOS', 'QUERO LER']

const OpcoesHeader = () => {
    return(
        <Opcoes>
            { textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}
export default OpcoesHeader;