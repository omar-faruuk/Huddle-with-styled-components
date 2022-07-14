import { ThemeProvider } from "styled-components";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Container from './Components/Styled/container.styled'
import  GlobalStyled  from "./Components/Styled/Global.styled";
import content from "./content";
import Footer from './Components/Footer';
function App() {
  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
    mobile: '768px',
  }
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyled/>
    <Header/>
    <Container>
       {
        content.map((item, index)=>(
          <Card key={index} item={item}/>
        ))
       }
    </Container>
    <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
