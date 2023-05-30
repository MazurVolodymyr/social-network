
import { userAPI, profileAPI } from "../API/api"

const ADD_POST = 'ADD_POST'
const CHANGE_POST_BLL = 'CHANGE_POST_BLL'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, post: "heey", countLikes: 10 },
        { id: 2, post: "heey", countLikes: 11},
        { id: 3, post: "wrrrr", countLikes: 6},
    ],
    newTextPost: ' ',
    profile: null,
    status: ""

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
        case SET_STATUS: {
            return{ ...state, status: action.status}
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

export const setStatus = (status) => ({type:SET_STATUS, status})

export const setUserProfile = (profile) =>{
    return{
        type: SET_USER_PROFILE,
        profile,
    }
}

//! thunk
export const setUserId = (userId) =>{
    return (dispatch) =>{
        userAPI.getUserId(userId).then(response =>{
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userId) =>{
    return (dispatch) =>{
        profileAPI.getStatus(userId).then(response =>{
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status) =>{
    return (dispatch) =>{
        profileAPI.updateStatus(status).then(response =>{
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}



export default contentReducer;

