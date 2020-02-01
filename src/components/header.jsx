import React, { Component } from 'react';


class Header extends Component {
  render() {
    return(
      <div style={headerStyle}>
        <div>
        </div>
          <h1 style={titleStyle}>The Collective </h1>
      </div>
    )
  }
}

const headerStyle = {
  background: '#7C3333',
  height: '10em',
  borderStyle: 'solid',
  borderColor: 'transparent transparent black',
};

const titleStyle = {

  fontSize: '4em',
  textAlign : 'center',
  color: '#E2D185',
  backgroundColor: '#7C3333',

}

export default Header;
