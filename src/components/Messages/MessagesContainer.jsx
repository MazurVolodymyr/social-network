import React from 'react';
import Messages from './Messages'
import { sendMessageCreator, updateNewMessagesBodyCreator } from '../../redux/messages-reducer';


const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let sendSMS = () =>{
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessagesChange = (body) =>{
        props.store.dispatch(updateNewMessagesBodyCreator(body))
    }

    return (
        <Messages updateNewMessagesBody = { onNewMessagesChange }
            sendMessage = { sendSMS }
            messagesPage = { state }
        />
    )
}

export default MessagesContainer;