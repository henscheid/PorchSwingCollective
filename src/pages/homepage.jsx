import React, { Component } from 'react';

import Header from '../components/header'
import Intro from '../components/intro'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Nav2 from '../components/nav2'

class HomePage extends Component {
  render() {
    return(
      <div style={wrapper}>
        <Header></Header>
        <Intro></Intro>
        <Nav2></Nav2>
        <Footer></Footer>
      </div>
    );
  }
}
  const wrapper = {
    background: '#E2D185'
  }


  export default HomePage;
