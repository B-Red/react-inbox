import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar.js';
import MessageList from './components/MessageList.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Toolbar />
      <MessageList />

      </div>
    );
  }
}

export default App;
