import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return(
      <div>
        <p style={introText}>we are just a group of friends who want to share our favorite
        creations with the world<br></br><br></br>

        art, tune, tastes, and games sums up most of our current projects but
        we don't like to box ourselves in ;)
        </p>
      </div>
    )
  }
}

export default Intro;

const introText = {
  textAlign: 'center',
}
