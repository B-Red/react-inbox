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

  messageSelected = (id) => {
    console.log(id)

    const updatedMessages = this.state.messages.map(message => {
      if(message.id === id){
        message.selected = !message.selected
      }
      return message
    })
    this.setState({
      messages: updatedMessages
    })
  }

  markAsReadButtonClicked = () => {
    console.log('readbuttonclicked')
    // TODO: for each message selected make it "read
    const selectedMessages = this.state.messages.filter(message => message.selected === true)
    console.log("message selected", selectedMessages)
    selectedMessages.forEach(message => this.messageRead(message.id))
  }

  messageRead = async (id) => {
    console.log('read this message!', id)
    let message = {
      messageIds: [id],
      command: "read",
      "read": true
    }
    await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const updatedMessages = this.state.messages.map(message => {
      if(message.id === id){
        message.read = true
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
      <Toolbar readClicked={this.markAsReadButtonClicked}  />
      <MessageList messageSelected={this.messageSelected} messages={this.state.messages} messageRead={this.messageRead}/>

      </div>
    );
  }
}

export default App;
