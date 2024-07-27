import { getUser } from '@/Api/userApi'
import React, { useEffect, useMemo, useState } from 'react'
import { useAppSelector } from '@/Redux/Store'
import { BiCalendar } from 'react-icons/bi'
import { format } from 'date-fns'
import useEditModal from '@/hooks/UseEditModal copy'
import EditModel from '../Modals/EditModel'

interface UserProp {
    userId: any
}

const UserBio: React.FC<UserProp> = ({ userId }) => {

    const [editModal, setEdimodal] = useState<any>(false)

    const [user1, setUser1] = useState<any>({})

    const { user } = useAppSelector((state) =>
        state.user
    )


    const createsAt = useMemo(() => {
        if (!user?.created_at) {
            return null
        } else {
            return format(new Date(user.created_at), 'MMMM yyyy')
        }
    }, [user?.created_at])

    useEffect(() => {
        getUser(userId).then((data: any) => {
            if (data) {
                setUser1(data.data.data)
            } else {
                return
            }
        })
    })
    function fun() {
        setEdimodal(true)
    }
    return (
        <div className='border-b-[1px] border-neutral-800 pb-4'>
            <div className='flex justify-end p-2'>
                {
                    user1 && user ?
                        userId == user.id ? (
                            <>
                                <p className='text-white cursor-pointer' onClick={()=>fun()} >Edit profile</p>
                                <EditModel
                                    editModal={editModal}
                                    setEdimodal={setEdimodal}
                                    data={user}
                                />
                            </>
                        ) :
                            (
                                <p className='text-white'>Folw</p>
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
                <div className='flex flex-col mt-4'>
                    <p className='text-white'>
                        {user?.bio ? user?.bio : "enter your biogrophy"}
                    </p>
                </div>
                <div className='flex flex-row items-center mt-4 gap-3 text-neutral-500'>
                    <BiCalendar size={24} />
                    <p className='text-white'>
                        joined {createsAt}
                    </p>
                </div>
                <div className='flex flex-row items-center mt-4 gap-6'>
                    <div className='flex flex-row items-center gap-1'>
                        <p className='text-white'>
                            {user?.following ? Object.keys(user?.following).length : ''}
                        </p>
                        <p className='text-neutral-500'>
                            Following
                        </p>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <p className='text-white'>
                            {user?.following ? Object.keys(user?.followers).length : ''}
                        </p>
                        <p className='text-neutral-500'>
                            Followers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBio