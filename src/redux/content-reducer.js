const ADD_POST = 'ADD_POST'
const CHANGE_POST_BLL = 'CHANGE_POST_BLL'

const contentReducer = (state, action) =>{

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 2,
                post: state.newTextPost,
                countLikes: 0,
            };
            state.posts.push(newPost);
            state.newTextPost = '';
            return state;
        case CHANGE_POST_BLL: 
            state.newTextPost = action.newText;
            return state;
        default:
            return state;
    }
}

// this export use user of UI
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const changePostBllActionCreator = (text) => {
    return {
        type: CHANGE_POST_BLL,
        newText: text,
    }
}
//
export default contentReducer;

