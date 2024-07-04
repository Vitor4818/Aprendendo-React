import Pesquisa from './componentes/Pesquisa';
import Header from './componentes/Header'
import styled from 'styled-components';
import UltimosLancamentos from './componentes/UltimosLancamentos';
const AppContainer = styled.div `
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`

function App() {
  return (
    <AppContainer>
        <Header/>
        <Pesquisa/>
        <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;