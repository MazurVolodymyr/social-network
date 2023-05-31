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
        { id: 1, text : "HEY"},
        { id: 2, text : "Come on man i need five million bombs"},
        { id: 3, text : "London is the capital of great Britain"},
        { id: 4, text : "F**k you"},
        { id: 5, text : "HEEEEY"},
    ],
}

const messagesReducer = (state = initialState, action) =>{


    switch(action.type){
        case SEND_MESSAGE:
            let body = action.newMessagesBody;
            return{
                ...state,
                messagesData: [...state.messagesData,{id:6, text : body}]
            }

        default:
            return state;
    }
}
// this export use user of UI
export const sendMessageCreator = (newMessagesBody) =>{
    return {
        type: SEND_MESSAGE, newMessagesBody
    }
}
//
export default messagesReducer;

