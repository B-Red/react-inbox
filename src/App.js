import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar.js';
import MessageList from './components/MessageList.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [1, 2, 3]
    }
  }

  componentDidMount(){
    fetch("http://localhost:8082/api/messages")
      .then(function(response) {
      return response.json();
  })
      .then(myJson => {
        this.setState({
        messages: myJson
      });
  });
  }

  render() {
    return (
      <div className='App'>
      <Toolbar />
      <MessageList messages={this.state.messages}/>

      </div>
    );
  }
}

export default App;
