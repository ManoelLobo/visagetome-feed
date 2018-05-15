import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    appName: 'Visagetome',
  };

  render() {
    return <h1>{this.state.appName}</h1>;
  }
}

render(<App />, document.getElementById('app'));
