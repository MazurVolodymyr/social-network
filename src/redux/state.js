let rerenderEntireTree = () =>{
    console.log('hey');
}



let state = {

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
            {id: 1, post: "heey", countLikes: 10 },
            { id: 2, post: "heey", countLikes: 11},
            { id: 3, post: "wrrrr", countLikes: 6},
        ],
        newTextPost: ''
    }

}

export const addPost = () => {
    let newPost = {
        id: 2,
        post: state.contentPage.newTextPost,
        countLikes: 0,
    };
    state.contentPage.posts.push(newPost);
    state.contentPage.newTextPost = '';
    rerenderEntireTree();
} 

export const changePostBLL = (newText) => {
    state.contentPage.newTextPost = newText;
    rerenderEntireTree();
} 

export const Subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;