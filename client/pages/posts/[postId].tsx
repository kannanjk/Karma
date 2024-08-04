import { getComments } from '@/Api/Comments'
import { getOnePost } from '@/Api/Post'
import Forms from '@/Components/Forms'
import Header from '@/Components/LayOut/Header'
import LoadingModal from '@/Components/Modals/LoadingModel'
import CommentFeed from '@/Components/post/CommentFeed'
import PostItem from '@/Components/post/PostItem'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function PostId() {
    const [post, setPost] = useState<any>()
    const [comment, setComment] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)

    const router = useRouter()
    const { postId } = router.query

    const postI = {
        _id: postId
    }
    useEffect(() => {
        getOnePost(postI).then((data: any) => {
            if (data?.success) {
                setPost(data?.data)
                setLoading(false)
            } else {
                return
            }
        })
        getComments(postId).then((comm: any) => {
            if (comm?.success) {
                setComment(comm?.data)
            } else {
                return
            }
        })
    })
    return (
        <>
            <LoadingModal loading={loading} />
            <Header label='Tweet' showBackArrow />
            <PostItem data={post} userId={post?.user} />
            <Forms postId={postId} isComment placeholder="Text you'r reply"/>
            <CommentFeed coments={comment} />
        </>
    )
}

export default PostId