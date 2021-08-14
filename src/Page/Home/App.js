import React from 'react';
import Header from '../../Components/Header'
import { Hiro } from '../../Components/Hiro';
import { GlobalStyle } from '../../Components/GlobalStyle';
import { Features } from '../../Components/Features';
import { ProtoAbouts } from '../../Components/ProtoAbouts';
import { About } from '../../Components/About';
import Form from '../../Components/Form'
import { Footer } from '../../Components/Footer'
import NavbarLogo from '../../Components/NavbarLogo';
import { PostContact } from '../../Components/PostContact';
import { PostCarOne } from '../../Components/PostCarOne';
import ContentApp from './styles'






function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <NavbarLogo /> */}
      <div className="conatiner">
      
      </div>
      <Hiro />
      <Features />
      <ProtoAbouts
        ImageAbout={ImageAbout}
      />
      <About />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
