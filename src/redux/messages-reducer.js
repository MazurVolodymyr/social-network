const NEW_MESSAGE = 'NEW_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogsData: [    
        { id : 1, name:"Vova"},
        { id : 2, name:"Bogdan"},
        { id : 3, name:"Oleksandr"},
        { id : 4, name:"Den"},
        { id : 5, name:"Mary"},
        ],
    messagesData: [
        { text : "HEY"},
        { text : "Come on man i need five million bombs"},
        { text : "London is the capital of great Britain"},
        { text : "F**k you"},
        { text : "HEEEEY"},
    ],
    newMessagesBody: '',
}

const messagesReducer = (state = initialState, action) =>{
    

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
