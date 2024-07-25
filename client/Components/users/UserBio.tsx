import { getCurrentUser, getUser } from '@/Api/Protection'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { useAppSelector } from '@/Redux/Store'
import { useDispatch } from 'react-redux'
import { setUser } from '@/Redux/Features/GetUser'

interface UserProp {
    userId: any
}

const UserBio: React.FC<UserProp> = ({ userId }) => {

    const [user1, setUser1] = useState<any>({})

    const { user } = useAppSelector((state) =>
        state.user
    )

    useEffect(() => {
        getUser(userId).then((data: any) => {
            if (data) {
                setUser1(data.data.data)
            } else {
                return
            }
        })
    })
    return (
        <div className='border-b-[1px] border-neutral-800 pb-4'>
            <div className='flex justify-end p-2'>
                {
                    user1 && user ?
                        userId == user.id ? (
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
                        {user1?.name}
                    </p>
                    <p className='text-md text-neutral-500'>
                        @{user1?.email}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserBio