import { userAPI } from "../API/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    //totalUsersCount зробив фіксовано тому що юзерів зараз десятки тисяч
    currentPage: 1,
    isFetching: true,
    followingIsProgress: [],

}

const usersReducer = (state = initialState, action) =>{

    switch(action.type){
        case FOLLOW: 
            return {
                ...state, 
                // users: [...state.users], це рівносильно написаному нижче
                users: state.users.map( u => {
                    if(u.id === action.userID){
                        return { ...u, followed: true }
                    }
                    return u
                } ),
            }
            
        case UNFOLLOW: 
            return {
                ...state, 
                // users: [...state.users], це рівносильно написаному нижче
                users: state.users.map( u => {
                    if(u.id === action.userID){
                        return { ...u, followed: false }
                    }
                    return u
                } ),
            }
        
        case SET_USERS:
            return{...state, users: action.users}
        case SET_CURRENT_PAGE:
            return{...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return{...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING:
            return{ ...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{ ...state, followingIsProgress: action.isFetching 
                ? [...state.followingIsProgress, action.userId]
                : [state.followingIsProgress.filter(id => id !== action.userId)]}

        default:
            return state;
    }
}

export const followSuccess = (userID) => ( {type: FOLLOW, userID} )

export const unfollowSuccess  = (userID) => ( {type: UNFOLLOW, userID} )

export const setUsers  = (users) => ( {type: SET_USERS, users} )

export const setCurrentPage  = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage} )

export const setUsersTotalCount  = (totalUsersCount) => ( {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } )

export const toggleIsFetching = (isFetching) =>( {type: TOGGLE_IS_FETCHING, isFetching } )

export const toggleIsFollowingProgress = (isFetching, userId) =>( {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } )



//! thunk
export const getUsers = (currentPage, pageSize) =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true))

        userAPI.getUsers(currentPage, pageSize).then(data =>{
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            // dispatch(setTotalUsersCount(data.totalCount))
            //totalUsersCount зробив фіксовано тому що юзерів зараз десятки тисяч
        })
            
    }
}

export const follow = (userId, pageSize) =>{
    return (dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, userId))
        userAPI.follow(userId).then(response=>{
            if (response.data.resultCode === 0){
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
            
    }
}

export const unfollow = (userId, pageSize) =>{
    return (dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, userId))
        userAPI.unfollow(userId).then(response=>{
            if (response.data.resultCode === 0){
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
            
    }
}

export default usersReducer;

