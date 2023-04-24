import contentReducer from "./content-reducer"
import messagesReducer from "./messages-reducer"

let store = {
    _state: {
        messagesPage:  {
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
        },

        contentPage: {
            posts: [
                { id: 1, post: "heey", countLikes: 10 },
                { id: 2, post: "heey", countLikes: 11},
                { id: 3, post: "wrrrr", countLikes: 6},
            ],
            newTextPost: ' ',
        }
        
    },
    _callSubscriber() {
        console.log('change post');
    },

    getState(){
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.contentPage = contentReducer(this._state.contentPage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;
