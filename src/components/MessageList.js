import React from 'react'
import Message from './Message.js'

const MessageList = (props) => {
    return(
        props.messages.map(message => {
            return <Message />
        })
    )
}

export default MessageList