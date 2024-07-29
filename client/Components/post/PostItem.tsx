import { getAllPost } from '@/Api/Post'
import useLoginModal from '@/hooks/UseLoginModal'
import { useRegisterModal } from '@/hooks/UseRegisterModal'
import { useAppSelector } from '@/Redux/Store'
import { formatDistanceToNowStrict } from 'date-fns'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Avathar from '../Avathar'
import { getUser } from '@/Api/userApi'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'

interface PostItemProp {
    data?: Record<string, any>
    userId?: string
}

const PostItem: React.FC<PostItemProp> = ({
    userId, data
}) => {
    const router = useRouter()
    const loginModal = useLoginModal()
    const [user, setUser] = useState<any>({})
    console.log(data);

    useEffect(() => {
        getUser(Number(userId)).then((data: any) => {
            if (data) {
                setUser(data.data.data)
            } else {
                return
            }
        })
    })

    const goToUser = useCallback((event: any) => {
        event.stopPropagation()
        router.push(`/users/${user?.id}`)
    }, [user?.id, router])

    const onLike = useCallback((event: any) => {
        event.stopPropagation()
        loginModal.onOpen()
    }, [loginModal])

    const createdAt = useMemo(() => {
        if (data?.createdAt) {
            return formatDistanceToNowStrict(new Date(data.createdAt))
        } else {
            return
        }
    }, [data?.createdAt])

    return (
        <div className='border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition '>
            <div className='flex flex-row items-start gap-3'>
                <Avathar userId={data?.user} />
                <div>
                    <div onClick={goToUser} className='flex flex-row items-center gap-2'>
                        <p className='text-white font-semibold cursor-pointer hover:underline  md:block'>{user?.name} </p>
                        <span className='text-neutral-500 cursor-pointer hover:underline hidden md:block'>
                            @{user?.email}
                        </span>
                        <span className='text-neutral-500 text-sm'>
                            {createdAt} ago
                        </span>
                    </div>
                    <div className='text-white mt-1'>
                        {data?.content}
                    </div>
                    <div className='flex flex-row items-center mt-3 gap-10'>
                        <div className='flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500'>
                            <AiOutlineHeart size={20} />
                            <p>
                                {data?.comments.length}
                            </p>
                        </div>
                        <div className='flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500'>
                            <AiOutlineMessage size={20} />
                            <p>
                                {data?.comments.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem