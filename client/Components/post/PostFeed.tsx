import React, { useEffect, useId, useState } from "react"
import PostItem from "./PostItem"
import { getAllPost, getUserPost } from "@/Api/Post"
import { useRouter } from "next/router"

interface PostProp {
    userI?: number
}

const PostFeed: React.FC<PostProp> = ({ userI }) => {
    const [post, setPost] = useState([])
    const router = useRouter()
    const { userId } = router.query

    useEffect(() => {
        const usId = {
            user: Number(userId)
        }
        userId ?
            getUserPost(usId).then((res: any) => {
                setPost(res)
            })
            :
            getAllPost().then((res: any) => {
                setPost(res)
            })
    }, [userI, userId])
    return (
        <>
            {
                post?.map((item: any, ind:number) => (
                    <PostItem
                        data={item}
                        key={ind}
                        userId={item.user}
                    />
                ))
            }
        </>
    )
}

export default PostFeed