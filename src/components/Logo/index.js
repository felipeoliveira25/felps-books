import logo from '../../icons/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #FFF;
    gap: 10px;
`

const LogoImage = styled.img`
   height: 40px;
   
    
`

const Logo = () => {
    return(
        <LogoContainer>
            <LogoImage 
                src={logo}
                alt='logo'
             />
             <p><strong>F-</strong>BOOKS</p>
        </LogoContainer>
    )
}

export default Logo