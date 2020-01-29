import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <div style ={footerContainer}>
        <p style ={footerText}>SMASH that FuCKin sUBsCRIBE buTTon and foLLOw
        aLL our soCIALS!!!!
        </p>
      </div>
    )
  }
}

const footerContainer = {
  background: '#0099ff',
  height: '5em',
}

const footerText = {
  position: 'bottom',
  fontSize: '1em',
  color: 'white',
  textAlign: 'center'
}
export default Footer;
