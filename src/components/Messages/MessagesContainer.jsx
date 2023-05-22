import Messages from './Messages'
import { sendMessageCreator, updateNewMessagesBodyCreator } from '../../redux/messages-reducer';

import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage : () => { 
            dispatch(sendMessageCreator()) 
        },
        updateNewMessagesBody: (body) => { 
            dispatch(updateNewMessagesBodyCreator(body))
        },
    }
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default MessagesContainer;