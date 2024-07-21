import { setUser } from '@/Redux/Features/GetUser'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { create } from 'zustand'
const API = axios.create({ baseURL: "http://127.0.0.1:3005" })

const Protection = () => {
    const dispatch = useDispatch()
    const getUserProtect = async () => {
        try {
            const res = await API.post('/user/auth/getOneUser', {
                token: localStorage.getItem('token')
            })
            if (res.data.success) {
                dispatch(setUser(res.data.data))
            }
        } catch (error) {
            console.log();
        }
    }
    useEffect(() => {
        getUserProtect()
    })
}

export default Protection