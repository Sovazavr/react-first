const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        // {
        //     id: 1, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
        //     followed: false, fullName: 'Dmitry', status: 'I\'m a Boss', location: { city: 'Moskow', country: 'Russia' }
        // },
        // {
        //     id: 2, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLRN2Kc8z7vb59WJjUH2iiX4bLokqSS_sNvoSpQa=s900-c-k-c0x00ffffff-no-rj',
        //     followed: true, fullName: 'Alex', status: 'I\'m a Boss two', location: { city: 'Kiev', country: 'Ukrain' }
        // },
        // {
        //     id: 3, photoUrl: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/84950c69067397.Y3JvcCw3NTIsNTg4LDc0LDE1Ng.jpg',
        //     followed: true, fullName: 'Jordani Jovanovic', status: 'I am a child of Belarus', location: { city: 'Minsk', country: 'Belorus' }
        // },
        // {
        //     id: 4, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-69.jpg',
        //     followed: false, fullName: 'Antonio', status: 'I\'m a Boss fo', location: { city: 'Leningrad', country: 'Russia' }
        // },
        // {
        //     id: 5, photoUrl: 'https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg',
        //     followed: false, fullName: 'Kirill', status: 'I\'m a Boss five', location: { city: 'Barnaul', country: 'Russia' }
        // },
        // {
        //     id: 6, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg',
        //     followed: true, fullName: 'Gleb', status: 'I\'m a Boss zero', location: { city: 'Los-Angeles', country: 'USA' }
        // },
    ]
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
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })//AC-ActionCreator
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


