import React, { useCallback, useState } from 'react'
import  useLoginModal  from '@/hooks/LoginModal'
import {useRegisterModal} from '@/hooks/RegisterModal'
import Input from '../Input'
import Modal from '../Modal'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setUser } from '@/Redux/Features/GetUser'

export function LoginModal() {
    const API = axios.create({ baseURL: "http://localhost:3005" })
    const loginModal = useLoginModal() 
    const REgisterModal = useRegisterModal()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const onTogle = useCallback(() => {
        if (isLoading) {
            return;
        }
        loginModal.onClose()
        REgisterModal.onOpen()
    }, [isLoading, REgisterModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setLoading(true)
            if ( email && password) {
                const res = await API.post('/user/auth/login', {  email, password })
                if (res.data.success) {
                    loginModal.onClose()
                    toast.success(res.data.message)
                    dispatch(setUser(res.data.data))
                    localStorage.setItem('token',res.data.token)
                } else {
                    toast.error(res.data.message)
                }
            } else {
                toast.error("Fill all columns")
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }, [API, dispatch, email, loginModal, password])

    const bodyContent = (
        <div className='flex flex-col gap-4 text-white'>
            <Input
                placeHolder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeHolder='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )
    const footer = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>Create an Account
                <span
                    onClick={onTogle}
                    className='text-white cursor-pointer hover:underline'>
                    Sign Up
                </span>
            </p>
        </div>
    )
    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Sign in'
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footer} />
    )
}

export default LoginModal