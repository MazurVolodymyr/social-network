import axios from "axios";



const istance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{"API-KEY": "60f7b53c-22ea-444c-89fb-caf8fbd7b173"}
})

//створення глобального методу userAPI та його об'єктами
export const userAPI = {
    getUsers(currentPage, pageSize ){
        return istance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId){
        return istance.post(`follow/${userId}`, {})
    },
    unfollow(userId){
        return istance.delete(`follow/${userId}`)
    },
    getUserId(userId){
        console.warn('use profileAPI object')
        return profileAPI.getUserId(userId)
    },
}

export const profileAPI = {
    getUserId(userId){
        return istance.get(`profile/` + userId)
    },
    getStatus(userId){
        
        return istance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return istance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    loginSignIn(){
        return istance.get(`auth/me`)
    },
}



