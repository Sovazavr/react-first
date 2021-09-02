import { profileAPI } from '../api/api'
const ADD_POST = 'ADD-POST'
const SET_PHOTO='SET-PHOTO'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, post: 'Hi, how a you', likesCount: 20 },
        { id: 2, post: 'It\'s my first post', likesCount: 12 }
    ],

    profile: null,
    status: '',
    
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }


        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos:action.photos}
            }
        }
        default:
            return state
    }


}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}


export const setStatusAC = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const setPhotoAC = (photos) => {
    return {
        type: SET_PHOTO,
        photos
    }
}

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))

}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export const savePhoto=(file) =>async (dispatch) => {
    let response=await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoAC(response.data.data.photos))
    }
}