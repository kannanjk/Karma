import React, { useCallback, useState } from 'react'
import { setUser } from '@/Redux/Features/GetUser'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useRegisterModal } from '@/hooks/UseRegisterModal'
import { useLoginModal } from '@/hooks/UseLoginModal'

import Input from '../Input'
import Modal from '../Modal'
import axios from 'axios'
import toast from 'react-hot-toast'


function RegisterModal() {
    const API = axios.create({ baseURL: "http://localhost:3005" })
    const dispatch = useDispatch()
    const loginModal = useLoginModal()
    const REgisterModal = useRegisterModal()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const onTogle = useCallback(async () => {
        if (isLoading) {
            return;
        }
        REgisterModal.onClose()
        loginModal.onOpen();
    }, [isLoading, REgisterModal, loginModal])
 
    const onSubmit = useCallback(async () => { 
        try {
            setLoading(true)
            if (name && email && password) {
                const res = await API.post('/user/auth/signUp', { name, email, password })
                if (res.data.success) {
                    REgisterModal.onClose()
                    toast.success(res.data.message)
                    dispatch(setUser(res.data.data))
                    localStorage.setItem('token',res.data.token)
                    location.reload()
                } else {
                    toast.error(res.data.message)
                }
            } else {
                toast.error("Fill all columns")
            }
        } catch (error) {
            console.log(error);
            toast.error("Server error")
        } finally {
            setLoading(false)
        }
    }, [API, REgisterModal, dispatch, email, name, password])

    const bodyContent = (
        <div className='flex flex-col gap-4 text-white'>
            <Input
                placeHolder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                disabled={isLoading}
            />
            <Input
                placeHolder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
                disabled={isLoading}
            />
            <Input
                placeHolder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
                disabled={isLoading}
            />
        </div>
    )
    const footer = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>Already have an acount?
                <span
                    onClick={onTogle}
                    className='text-white cursor-pointer hover:underline'>
                    Sign In
                </span>
            </p>
        </div>
    )
    return (
        <Modal
            disabled={isLoading}
            isOpen={REgisterModal.isOpen}
            title='Register Now'
            actionLabel='Sign Up'
            onClose={REgisterModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footer} />
    )
}

export default RegisterModal