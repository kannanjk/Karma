import { getUser } from "@/Api/Protection"
import Header from "@/Components/LayOut/Header"
import UserBio from "@/Components/users/UserBio"
import UserHero from "@/Components/users/UserHero"
import { useAppSelector } from "@/Redux/Store"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface UserProp {
    name: string
    email: string
}

const UserView = () => {   

    const [user1, setUser] = useState<any>({})    
    
    const router = useRouter()
    const { userId } = router.query    

    useEffect(() => {
        getUser(Number(userId)).then((data:any)=>{
            setUser(data)
        })
    }, [userId])

    return (
        <>
            <Header showBackArrow label={user1.name} />
            <UserHero userId={userId as string} />
            <UserBio userId={userId as string } />
        </>
    )
}

export default UserView