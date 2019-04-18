import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/myStyles.css'

import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

class App extends Component {
  render() {
    return (
      <div>
        <ClickCounter name="SAhan" />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
