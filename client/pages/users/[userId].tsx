import { getUser, getUsers } from "@/Api/userApi"
import Header from "@/Components/LayOut/Header"
import PostFeed from "@/Components/post/PostFeed"
import UserBio from "@/Components/users/UserBio"
import UserHero from "@/Components/users/UserHero"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const UserView = () => {
    const [user, setUser] = useState<any>({})
    
    const router = useRouter()

    const { userId } = router.query

    useEffect(() => {
        getUser(Number(userId)).then((data: any) => {
            if (data) {
                setUser(data?.data?.data)
            } else {
                return
            }
        })
    }, [userId])

    return (
        <>
            <Header showBackArrow label={user?.name} />
            <UserHero userId={userId as string} />
            <UserBio userId={Number(userId)  } />
            <PostFeed userI={Number(userId)} />
        </>
    )
}

export default UserView