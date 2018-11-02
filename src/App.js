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

  async componentDidMount(){
    let response = await fetch("http://localhost:8082/api/messages")
    let myJson = await response.json()
    this.setState({
      messages: myJson
    })
  }

  messageRead = async (id) => {
    console.log('read this message!', id)
    let message = {
      messageIds: [id],
      command: "read",
      "read": true
    }
    const result = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const updatedMessages = this.state.messages.map(message => {
      if(message.id === id){
        message.read = !message.read
      }
      return message
    })
    this.setState({
      messages: updatedMessages
    })
  }

  render() {
    return (
      <div className='App'>
      <Toolbar />
      <MessageList messages={this.state.messages} messageRead={this.messageRead}/>

      </div>
    );
  }
}

export default App;
