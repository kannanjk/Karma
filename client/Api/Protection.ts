import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:3005" })

export const getUsers = async () => {
    try {
        const res = await API.get('/user/admin/getAllUser')
        if (res) {
            return res.data.data
        }
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (userId: number) => {
    try {
        const res = await API.post('/user/auth/getUserData', {
            id: Number(userId)
        })
        if (res.data) {
            return res
        } else {
            return 'User not found'
        }
    } catch (error) {
        console.log(error);
    }
}


export const getCurrentUser = async () => {
    try {
        const res = await API.post('/user/auth/getOneUser', {
            token: localStorage.getItem('token')
        })        
        if (res.data.success) {
            return res.data
        }else{
            return 'user not found'
        }
    } catch (error) {
        console.log();
    }
}