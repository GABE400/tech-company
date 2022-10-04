import { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import InfoContainers from './components/infoContainers/InfoContainers';
import InfoSectionFour from './components/infoSectionFour/InfoSectionFour';
import InfoSectionOne from './components/infoSectionOne/InfoSectionOne';
import InfoSectionThree from './components/infoSectionThree/InfoSectionThree';
import InfoSectionTwo from './components/infoSectionTwo/InfoSectionTwo';
import Navbar from './components/navbar/Navbar';
import Team from './components/team/Team';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: ${(props) => props.theme.colors.bgDefault} ;
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        font-family: 'Roboto', sans-serif;
    }
}
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
  height: 100vh;
`;

const theme = {
  colors: {
    primary: ' #128182',
    secondary: '#2c729b',
    green: '#00bf8f',
    light: '#000000',
    text: 'snow',
    bgText: 'white',
    textDark: '#D3CCE3',
    bgDefault: 'white',
    bgPrimary: 'darkBlue',
    bgLight: 'aliceBlue',
    bigSun: 'black',
  },
};

const darktheme = {
  colors: {
    primary: 'white',
    secondary: '#BD3F32',
    green: '#00bf8f',
    light: '#000000',
    text: 'snow',
    bgText: 'white',
    textDark: '#E9E4F0',
    bgDefault: 'black',
    bgPrimary: 'darkBlue',
    bgLight: '#2C5364',
    bigSun: 'Yellow',
  },
};

function App() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeProvider theme={mode ? darktheme : theme}>
      <GlobalStyles />
      <Container>
        <Navbar setMode={setMode} mode={mode} />
        <Hero />
        <InfoContainers />
        <InfoSectionOne />
        <InfoSectionTwo />
        <InfoSectionThree />
        <InfoSectionFour />
        <Team />
        <Blogs />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
