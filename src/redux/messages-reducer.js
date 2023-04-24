const NEW_MESSAGE = 'NEW_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'


const messagesReducer = (state, action) =>{
    

    switch(action.type){
        case NEW_MESSAGE:
            state.newMessagesBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessagesBody;
            state.newMessagesBody = '';
            state.messagesData.push({ text : body},);
            return state;
        default:
            return state;
    }
}
// this export use user of UI
export const sendMessageCreator = () =>{
    return {
        type: SEND_MESSAGE,
    }
}
export const updateNewMessagesBodyCreator = (body) =>{
    return{
        type: NEW_MESSAGE,
        body: body,
    }
}
//
export default messagesReducer;

