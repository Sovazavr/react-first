const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'
const SET_COUNT = 'SET-COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        default:
            return state
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })//AC-ActionCreator
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_PAGE, currentPage })
export const setTotalCountAC = (totalCount) => ({ type: SET_COUNT, totalCount })

