import React, { Component } from 'react';

class Nav2 extends Component {
  render() {
    return(
      //could clean this up by making it it's own component
      <div style={wrapper}>
        <div style={rowContainer}>
          <div style={box1}>Art</div>
          <div style={box2}></div>
          <div style={box3}>Recipes</div>
          <div style={box4}></div>
          <div style={box5}>Instant Wisdom</div>
          <div style={box6}></div>
        </div>
        <div style={rowContainer}>
          <div style={box6}></div>
          <div style={box5}>Music</div>
          <div style={box4}></div>
          <div style={box3}>Games</div>
          <div style={box2}></div>
          <div style={box1}>Merch</div>
        </div>
      </div>
    )
  }
}
const wrapper = {
  paddingBottom: '2em',
}
const rowContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  height: '10em',
  width: '100%',
}

const box1 = {
  width: '10em',
  height: '10em',
  backgroundColor: '#7C3333',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}

const box2 = {
  width: '10em',
  height: '10em',
  backgroundColor: '#4579C6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const box3 = {
  width: '10em',
  height: '10em',
  backgroundColor: '#337357',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const box4 = {
  width: '10em',
  height: '10em',
  backgroundColor: '#6D9F71',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const box5 = {
  width: '10em',
  height: '10em',
  backgroundColor: '#E2D185',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const box6 = {
  width: '10em',
  height: '10em',
  backgroundColor: '#D8A195',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
export default Nav2;
