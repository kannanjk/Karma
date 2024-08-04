import axios from "axios";
const API = axios.create({ baseURL: "http://127.0.0.1:3005" })

export const createComment = async (data: any) => {
    // console.log(data);
    
    try {
        const res = await API.post('/post/comment/createComment', data)
        if (res.data.success) {
            return res.data
        }
    } catch (error) {
        console.log(error);
    }
}

export const getComments = async (postId: any) => {
    try {
         const da={
            postId:postId
         }
        if (postId) {
            const res = await API.post('/post/comment/getComment', da)
            return res.data
        }
    } catch (error) {
        console.log(error);

    }
}