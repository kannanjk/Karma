import { getCurrentUser, getUser } from '@/Api/Protection'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { useAppSelector } from '@/Redux/Store'
import { useDispatch } from 'react-redux'
import { setUser } from '@/Redux/Features/GetUser'

interface UserProp {
    userId: string
}

const UserBio: React.FC<UserProp> = (userId) => {


    const [user1, setUser1] = useState<any>({})
    const dispatch = useDispatch()

    const { user } = useAppSelector((state) =>
        state.user
    )

    useEffect(() => {
        getCurrentUser().then((data: any) => {
            dispatch(setUser(data.data))
        })
    })

    useEffect(() => {
        getUser(Number(userId)).then((data: any) => {
            setUser1(data.id)
        })
    }, [userId])
    return (
        <div className='border-b-[1px] border-neutral-800 pb-4'>
            <div className='flex justify-end p-2'>
                {
                    user ?
                        userId.userId == user.id ? (
                            <Button secondry label='Edit' onClick={() => { }} />
                        ) :
                            (
                                <Button
                                    onClick={() => { }}
                                    label='Follw'
                                    secondry
                                />
                            ) : ''
                }
            </div>
            <div className='mt-8 px-4'>
                <div className='flex flex-col'>
                    <p className='text-white text-2xl font-semibold'>
                        {/* {user1.email} */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserBio