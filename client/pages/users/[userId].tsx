import Header from "@/Components/LayOut/Header"
import { useRouter } from "next/router"

const UserView = () =>{
    const router = useRouter()
    const {user } = router.query
    return(
        <>
        <Header showBackArrow label="User Profile" />
        </>
    )
}

export default UserView