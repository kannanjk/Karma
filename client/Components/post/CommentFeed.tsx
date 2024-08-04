import React from "react"
import CommentItem from "./CommentItem"

interface CommentProp {
    coments?: Record<string, any>[]
}

const CommentFeed: React.FC<CommentProp> = ({ coments = [] }) => {
    return (
        <>
            {
                coments.map((comme, ind) => (
                    <CommentItem key={ind} data={comme} />
                )) 
            }
        </>
    )
}

export default CommentFeed