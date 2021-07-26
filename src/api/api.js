import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a7610d27-572e-48cc-a155-cc8b8a286002"
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
            response => { return response.data }
        )
    },
    followUsers(userId) {
        return instance.post(`follow/${userId}`).then(
            response=>{return response.data}
        )
    },
    unfollowUsers(userId) {
        return instance.delete(`follow/${userId}`).then(
            response=>{return response.data}
        )
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
    

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
        
    }
}


