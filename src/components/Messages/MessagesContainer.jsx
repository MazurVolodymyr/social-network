import { sendMessageCreator, updateNewMessagesBodyCreator } from '../../redux/messages-reducer';

import { connect } from 'react-redux';
import Messages from './Messages';

import { withAuthRedarect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

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



export default  compose(withAuthRedarect,connect(mapStateToProps,mapDispatchToProps))(Messages)