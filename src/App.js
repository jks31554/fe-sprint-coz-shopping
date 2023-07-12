import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* flex: 1; */
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main></Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
