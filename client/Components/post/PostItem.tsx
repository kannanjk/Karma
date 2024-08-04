import { likePost } from '@/Api/Post'
import useLoginModal from '@/hooks/UseLoginModal'
import { useAppSelector } from '@/Redux/Store'
import { formatDistanceToNowStrict } from 'date-fns'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Avathar from '../Avathar'
import { getUser } from '@/Api/userApi'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'
import LoadingModal from '../Modals/LoadingModel'
import toast from 'react-hot-toast'

interface PostItemProp {
    data?: Record<string, any>
    userId?: string
}

const PostItem: React.FC<PostItemProp> = ({
    userId, data
}) => {
    const router = useRouter()
    const loginModal = useLoginModal()
    const [user1, setUser1] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [likeC, setLikec] = useState<any>(false)
    const [like, setLike] = useState(0)
    const [comment, setComment] = useState(0)
    const { user } = useAppSelector((state) =>
        state.user
    )

    const onClick = useCallback((event: any) => {
        setLoading(true)
        const postId = data?._id
        event.stopPropagation();
        const url = `/posts/${postId}`
        router.push(url)
    }, [data?._id, router])

    useEffect(() => {
        getUser(Number(userId)).then((dat: any) => {
            if (dat) {
                setLoading(true)
                setUser1(dat.data.data)
                data?.likes.findIndex((rt: any) => {
                    if (rt == user?.id) {
                        setLoading(false)
                       return setLikec(true)
                    } else {
                        setLoading(false)
                        setLikec(false)
                    }
                })
                setLoading(false)
            } else {
                setLoading(false)
                return
            }
        })
        if (data && data.likes && data.comments) {
            setLike(Object.keys(data?.likes).length);
            setComment( Object.keys(data.comments).length);
        }
    }, [data, user?.id, userId])

    const goToUser = useCallback((event: any) => {
        event.stopPropagation()
        
        router.push(`/users/${userId}`)
    }, [router, userId])

    const onLike = useCallback(async (event: any) => {
        event.stopPropagation()
        if (!user) {
            loginModal.onOpen()
        } else {
            setLikec((prev: any) => !prev);
            likeC ? setLike((prev: any) => prev - 1) : setLike((prev: any) => prev + 1)
            if (user1?.id && data?._id) {
                const res = await likePost(user?.id, data?._id)
                if (res.success) {
                    toast.success(res.message)
                }
            }
        }
    }, [data?._id, likeC, loginModal, user, user1?.id])

    const createdAt = useMemo(() => {
        if (data?. created_at) {
            return formatDistanceToNowStrict(new Date(data. created_at))
        } else {
            return
        }
    }, [data?. created_at])

    return (
        <div className='border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition '>
            <LoadingModal loading={loading} />
            <div className='flex flex-row items-start gap-3'>
                <Avathar userId={data?.user} />
                <div>
                    <div onClick={goToUser} className='flex flex-row items-center gap-2'>
                        <p className='text-white font-semibold cursor-pointer hover:underline  md:block'>{user1?.name} </p>
                        <span className='text-neutral-500 cursor-pointer hover:underline hidden md:block'>
                            @{user1?.email}
                        </span>
                        <span className='text-neutral-500 text-sm'>
                            {createdAt} ago
                        </span>
                    </div>
                    <div className='text-white mt-1'>
                        {data?.content}
                    </div>
                    <div className='flex flex-row items-center mt-3 gap-10'>
                        <div
                            onClick={onLike}
                            className={`flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition ${likeC ? 'text-red-600' : ''} hover:text-red-600`}
                        >
                            <div
                                className={`p-1 rounded-full transition ${likeC ? 'bg-red-600 text-white' : ''}`}
                                style={{ display: 'inline-flex' }}
                            >
                                <AiOutlineHeart size={20} />
                            </div>
                            <p className='text-white'>
                                {like}
                            </p>
                        </div>
                        <div
                            onClick={onClick}
                            className='flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500'>
                            <AiOutlineMessage size={20} />
                            <p className='text-white'>
                                {comment}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem