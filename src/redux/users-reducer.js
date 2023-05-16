
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    //totalUsersCount зробив фіксовано тому що юзерів зараз десятки тисяч
    currentPage: 2,
    isFetching: true,

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

        default:
            return state;
    }
}

export const follow = (userID) => ( {type: FOLLOW, userID} )

export const unfollow  = (userID) => ( {type: UNFOLLOW, userID} )

export const setUsers  = (users) => ( {type: SET_USERS, users} )

export const setCurrentPage  = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage} )

export const setUsersTotalCount  = (totalUsersCount) => ( {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } )

export const toggleIsFetching = (isFetching) =>({
    type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;

