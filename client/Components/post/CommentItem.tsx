import { useRouter } from "next/router"
import { useCallback, useEffect, useMemo, useState } from "react"
import Avathar from "../Avathar"
import { getUser } from "@/Api/userApi"
import { formatDistanceToNowStrict } from "date-fns"

interface CommentProrp {
    data: Record<string, any> 
}

const CommentItem: React.FC<CommentProrp> = ({ data }) => {
    const router = useRouter()
    const [user1, setUser1] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        getUser(Number(data?.userId)).then((dat: any) => {
            if (dat) {
                setUser1(dat.data.data)
                setLoading(false)
            } else {
                setLoading(false)
                return
            }
        })
    }, [data?.userId])

    const gotUser = useCallback((event: any) => {
        const userId = data?.userId
        event.stopPropagation()
        router.push(`/users/${userId}`)
    }, [data?.userId, router])

    const createdAt = useMemo(() => {
        if (data?. created_at) {
            return formatDistanceToNowStrict(new Date(data?. created_at))
        } else {
            return
        }
    }, [data?. created_at])
    
    return (
        <div className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition ">
            <div className="flex flex-row items-start gap-3">
                <Avathar userId={data?.userId} />
                <div>
                    <div className="flex flex-row items-center gap-2">
                        <p
                            onClick={gotUser}
                            className="text-white font-semibold cursor-pointer hover:underline"
                        >
                            {user1?.name}
                        </p>
                        <span
                            className="text-neutral-500 cursor-pointer hover:underline hidden md:block "
                        >
                            @{user1?.email}
                        </span>
                        <span
                            className="text-neutral-500 text-sm"
                        >
                            {createdAt}
                        </span>
                    </div>
                    <div className="text-white mt-1" >
                        {data?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentItem