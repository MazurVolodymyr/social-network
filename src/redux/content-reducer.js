const ADD_POST = 'ADD_POST'
const CHANGE_POST_BLL = 'CHANGE_POST_BLL'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, post: "heey", countLikes: 10 },
        { id: 2, post: "heey", countLikes: 11},
        { id: 3, post: "wrrrr", countLikes: 6},
    ],
    newTextPost: ' ',
    profile: null,

}

const contentReducer = (state = initialState, action) =>{

    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 2,
                post: state.newTextPost,
                countLikes: 0,
            };

            return{
                ...state,
                posts: [...state.posts, newPost],
                newTextPost: '',
            }
        }
        case CHANGE_POST_BLL: {
            return{
                ...state,
                newTextPost: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return{ ...state, profile: action.profile }
        }
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

export const setUserProfile = (profile) =>{
    return{
        type: SET_USER_PROFILE,
        profile,
    }
}


export default contentReducer;

