import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import './components/myStyles.css'

import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

class App extends Component {
  render() {
    return (
      <div>
        <UserProvider value="SAhan">
          <ComponentC />        
        </UserProvider>
      </div>
    );
  }
}

export default App;
