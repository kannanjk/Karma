import React, { useEffect, useId, useState } from "react"
import PostItem from "./PostItem"
import { getAllPost, getUserPost } from "@/Api/Post"
import { useRouter } from "next/router"
import LoadingModal from "../Modals/LoadingModel"

interface PostProp {
    userI?: number
}

const PostFeed: React.FC<PostProp> = ({ userI }) => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const { userId } = router.query

    useEffect(() => {
        const usId = {
            user: Number(userId)
        }
        setLoading(true)
        userId ?
            getUserPost(usId).then((res: any) => {
                setPost(res)
                setLoading(false)
            })
            :
            getAllPost().then((res: any) => {
                setPost(res)
                setLoading(false)
            })
    }, [userI, userId])
    return (
        <>
        <LoadingModal loading={loading} />
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