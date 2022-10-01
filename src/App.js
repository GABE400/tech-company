import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Hero from './components/hero/Hero';
import InfoContainers from './components/infoContainers/InfoContainers';
import Navbar from './components/navbar/Navbar';

const GlobalStyles = createGlobalStyle`
body{
    background-color: white;
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        font-family: 'Roboto', sans-serif;
    }
}
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Hero />
        <InfoContainers />
      </Container>
    </>
  );
}

export default App;
