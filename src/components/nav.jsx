import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Img from 'react-image';
import navBar from '../images/roughNav.png';

class Nav extends Component {
  render() {
    return(
      <div style={navStyle}>
        <Img src={navBar} alt='Nav bar'/>
      </div>
    )
  }
}

export default Nav;

const navStyle = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center'
}
