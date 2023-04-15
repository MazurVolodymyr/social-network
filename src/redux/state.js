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
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('change post');
    },
    addPost () {
        let newPost = {
            id: 2,
            post: this._state.contentPage.newTextPost,
            countLikes: 0,
        };
        this._state.contentPage.posts.push(newPost);
        this._state.contentPage.newTextPost = '';
        this._callSubscriber(this._state);
    },
    changePostBLL (newText) {
        this._state.contentPage.newTextPost = newText;
        this._callSubscriber(this._state);
    },
    Subscribe (observer) {
        this._callSubscriber = observer;
    },
}

export default store;
