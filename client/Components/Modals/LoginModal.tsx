import React, { useCallback, useState } from 'react'
import  useLoginModal  from '@/hooks/LoginModal'
import {useRegisterModal} from '@/hooks/RegisterModal'
import Input from '../Input'
import Modal from '../Modal'

export function LoginModal() {
    const loginModal = useLoginModal()
    const REgisterModal = useRegisterModal()

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

            loginModal.onClose()
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }, [loginModal])

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