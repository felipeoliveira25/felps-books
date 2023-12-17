import styled from "styled-components";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";

const HeaderContainer = styled.header`
    background-color: #183D3D;
    height: 15vh;
    display: flex;
    justify-content: space-around;
    
    
`

const Header = () => {
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
        </HeaderContainer>
    )
    
}

export default Header;