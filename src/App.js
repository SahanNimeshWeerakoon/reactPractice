import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/myStyles.css'
import RefsDemo from './components/RefsDemo';

class App extends Component {
  render() {
    return (
      <div>
        <RefsDemo />
      </div>
    );
  }
}

export default App;
