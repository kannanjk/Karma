import { getUser, getUsers } from "@/Api/userApi"
import Header from "@/Components/LayOut/Header"
import PostFeed from "@/Components/post/PostFeed"
import UserBio from "@/Components/users/UserBio"
import UserHero from "@/Components/users/UserHero"
import { setUser } from "@/Redux/Features/GetUser"
import { useAppSelector } from "@/Redux/Store"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const UserView = () => {
    const [user, setUser] = useState<any>({})
    
    const router = useRouter()
    const dispatch = useDispatch()

    const { userId } = router.query

    useEffect(() => {
        getUser(Number(userId)).then((data: any) => {
            if (data) {
                setUser(data.data.data)
            } else {
                return
            }
        })
    }, [dispatch, userId])

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