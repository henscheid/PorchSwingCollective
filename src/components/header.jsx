import React, { Component } from 'react';


class Header extends Component {
  render() {
    return(
      <div style={headerStyle}>
        <h1 style={titleStyle}>The Collective </h1>
      </div>
    )
  }
}

const headerStyle = {
  background: 'white',
  height: '10em',
};

const titleStyle = {
  fontSize: '5em',
  textAlign : 'center',
  color: '#9AE3EA',

}

export default Header;
