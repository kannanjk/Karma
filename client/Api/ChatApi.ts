import axios from "axios";
const API = axios.create({ baseURL: "http://127.0.0.1:3005" })

export const getUserChat = async (input: any) => {
    try {
        if (input) {
            const res = await API.post('/chat/api/getUserChat', input)
            if (res.data.success) {
                return res.data.data
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getChat = async (input: any) => {
    try {
        if (input) {
            const res = await API.post('/chat/api/getChat', input)
            return res?.data
        }
    } catch (error) {
        console.log(error);
    }
}

export const sentChatReq = async (input: any) => {
    try {
        if (input) {
            const res = await API.post('/chat/api/createChat', input)
            if (res?.data) {
                return res?.data?.success
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const sentMessage = async (data: any) => {
    try {
        if (data) {
            const res = await API.post('/chat/api/createMsg', data)
            console.log(res?.data);
            
            if (res) {
               return res?.data
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getUserMessage = async (chatId: any) => {
    try {
        if (chatId) {
            const user = {
                chatId: chatId
            }
            const res = await API.post('/chat/api/getMsg', user)
            if (res.data.success) {
                return res.data.data
            }
        }
    } catch (error) {
        return
    }
}