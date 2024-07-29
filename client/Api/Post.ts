import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:3005" })


export const createPost = async (data: any) => {
    try {        
        const res = await API.post('/post/api/createPost', data)
        if (res.data.success) {
            return res.data
        } else {
            return
        }
    } catch (error) {
        console.log(error);

    }
}

export const getAllPost = async ()=>{
    try {
        const res = await API.get('/post/api/getAllPost')
        if (res.data.success) {
            return res.data.data
        } else {
            return
        }
    } catch (error) {
        console.log();
        
    }
}