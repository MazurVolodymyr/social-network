import React from 'react';
import Messages from './Messages'
import { sendMessageCreator, updateNewMessagesBodyCreator } from '../../redux/messages-reducer';

import StoreContext from '../../StoreContext';
const MessagesContainer = () => {



    return ( 
        <StoreContext.Consumer>
        { (store) =>{
            let state = store.getState().messagesPage;

            let sendSMS = () =>{
                store.dispatch(sendMessageCreator())
            }
            let onNewMessagesChange = (body) =>{
                store.dispatch(updateNewMessagesBodyCreator(body))
            }
            return <Messages updateNewMessagesBody = { onNewMessagesChange }
            sendMessage = { sendSMS }
            messagesPage = { state }
                />
            }

        }
            
        </StoreContext.Consumer>

    )
}

export default MessagesContainer;