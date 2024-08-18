import React, { useEffect, useId, useState } from "react"
import PostItem from "./PostItem"
import { getAllPost, getUserPost } from "@/Api/Post"
import { useRouter } from "next/router"
import LoadingModal from "../Modals/LoadingModel"
import { useAppSelector } from "@/Redux/Store"

interface PostProp {
    userI?: number
}

const PostFeed: React.FC<PostProp> = ({ userI }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const { userId } = router.query
    const { post } = useAppSelector((state) =>
        state.posts
    )
    return (
        <>
            <LoadingModal loading={loading} />
            {
                post?.map((item: any, ind: number) => (
                    <>
                        {
                            userId ?
                                userId == item?.user ?
                                    <PostItem
                                        data={item}
                                        key={ind}
                                        userId={item.user}
                                    />
                                    : null:
                                    <PostItem
                                        data={item}
                                        key={ind}
                                        userId={item.user}
                                    />
                        }
                    </>
                ))
            }
        </>
    )
}

export default PostFeed