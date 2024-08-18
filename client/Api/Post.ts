import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:3005" })

export const createPost = async (data: any) => {
    console.log(data);

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

export const getAllPost = async () => {
    try {
        const res = await API.get('/post/api/getAllPost')
        if (res.data.success) {
            return res.data.data
        } else {
            return
        }
    } catch (error) {
        console.log(error);
    }
}

export const getOnePost = async (data: any) => {
    try {
        if (data) {
            const res = await API.post('/post/api/onePost', data);
            if (res.data.success) {
                return res.data;
            }
        }
    } catch (error) {
        console.log(error);
    }
};

export const getUserPost = async (user: any) => {
    try {
        const res = await API.post('/post/api/getUserPost', user)
        if (res.data.success) {
            return res.data.data
        } else {
            return
        }
    } catch (error) {
        console.log(error);
    }
}

export const likePost = async (userId: any, postId: any) => {
    const data = {
        userId: userId,
        postId: postId
    }
    try {
        const res = await API.post('/post/api/likePost', data)
        return res.data
    } catch (error) {
        console.log(error);

    }
}