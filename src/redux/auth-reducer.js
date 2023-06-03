import { stopSubmit } from "redux-form"
import { authAPI } from "../API/api"
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: 2,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) =>{


    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }
        
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}}) 

//! thunk
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.loginSignIn().then(response=>{
            if(response.data.resultCode === 0){
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData( id, email, login, true ))
                
            }
        })
    }
}


//! thunk для логінізації на сайті + замикання 
export const login =(email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response=>{
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData())
        } else {
            let action = stopSubmit("login", {email: 'email is wrong or', password: 'password is wrong'})
            dispatch(action)
        } 
    })
} 

//! thunk для вилогінізації на сайті + замикання 

export const logout = () => (dispatch) => {
    authAPI.logout().then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData( null, null, null, false ))
        }
    })
}



export default authReducer