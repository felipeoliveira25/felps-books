import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
`
function App() {
  return (
    <AppContainer>
     <Header/>
     <Main/>
     <Footer/>

    </AppContainer>
  );
}

export default App;
