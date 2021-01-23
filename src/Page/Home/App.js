import React from 'react';
import { Header } from '../../Components/Header';
import { Hiro } from '../../Components/Hiro';
import { Wrapper } from '../../Components/Wrapper'
import { GlobalStyle } from '../../Components/GlobalStyle'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hiro />
      <Wrapper>
          
      </Wrapper>
    </div>
  );
}

export default App;
