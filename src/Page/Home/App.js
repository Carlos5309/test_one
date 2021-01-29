import React from 'react';
import { Header } from '../../Components/Header';
import { Hiro } from '../../Components/Hiro';
import { GlobalStyle } from '../../Components/GlobalStyle';
import { Features } from '../../Components/Features';
import { ProtoAbouts } from '../../Components/ProtoAbouts';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hiro />
      <Features />
      <ProtoAbouts />
    </div>
  );
}

export default App;
