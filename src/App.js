import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import './components/myStyles.css'

import GetMethod from './components/GetMethod';

class App extends Component {
  render() {
    return (
      <div>
        <GetMethod />
      </div>
    );
  }
}

export default App;
