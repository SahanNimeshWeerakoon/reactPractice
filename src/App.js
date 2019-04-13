import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/myStyles.css'

import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';


class App extends Component {
  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

export default App;
