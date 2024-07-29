import React, { useEffect, useState } from "react"
import PostItem from "./PostItem"
import { getAllPost } from "@/Api/Post"

interface PostProp {
    userId?: string
}

const PostFeed: React.FC<PostProp> = ({ userId }) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        getAllPost().then((res: any) => {
            setPost(res)
        })
    }, [])
    return (
        <>
            {
                post?.map((item, ind) => (
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