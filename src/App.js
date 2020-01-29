import React from 'react';
import './App.css';

import Header from './components/header'
import Intro from './components/intro'
import Nav from './components/nav'
import Footer from './components/footer'

function App() {
  return (
    <div style={wrapper}>
      <Header></Header>
      <Intro></Intro>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
}

const wrapper = {
  background: '#9AE3EA'
}


export default App;
