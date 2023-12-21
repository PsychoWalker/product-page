import React from 'react';
import './App.css';
import {Header} from "./components/layout/header/header";
import {Footer} from "./components/layout/footer/footer";
import {Wrapper} from "./components/layout/wrapper/wrapper";


function App() {
  return (
    <>
      <Header />
      <Wrapper />
      <Footer />
    </>
  );
}

export default App;
