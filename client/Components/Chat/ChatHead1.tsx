import React, { useEffect, useState } from 'react'
import Avathar from '../Avathar'
import { getUser } from '@/Api/userApi';

interface PostItemProp {
    userId: number
}

const ChatHead1: React.FC<PostItemProp> = ({ userId }) => {
    const [users, setUsers] = useState<any>({})

    useEffect(() => {
        getUser(userId).then((dat: any) => {
            if (dat?.success) {
                setUsers(dat?.data)
            } else {
                return
            }
        })
    }, [userId])

    return (
        <div className='p-3 border-b-[1px] flex-col items-center sm:items-start sm:flex-row border-neutral-800  w-full flex justify-start  gap-3'>
            <div className=' w-[35%] '>
                <Avathar ischat userId={users?.id} />
            </div>
            <div className='bg- text-start w-[65%] '>
                <h1 className='font-semibold'>
                    {users?.name}
                </h1>
            </div>
        </div>
    )
}

export default ChatHead1