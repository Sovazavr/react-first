import { createSelector } from "reselect"

//пример сложного селектора
//в оном используется более простой селектор, созданный в ручную, сей и передается первым параметром


export const getUsers =(state)=>{
    return state.usersPage.users
}
export const hightSelector=createSelector(getUsers, (users)=>{
    //функция-логика селектора
    users=[]
    return users.filter(u=>true)
})
export const getPageSize =(state)=>{
    return state.usersPage.pageSize
}
export const getTotalUsersCount =(state)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage=(state)=>{
    return state.usersPage.currentPage
}
export const getFollowingInProgress=(state)=>{
    return state.usersPage.followingInProgress
}