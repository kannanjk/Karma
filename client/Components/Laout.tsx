import React, { useEffect, useState } from "react"
import SideBar from "./LayOut/SideBar"
import FolwBar from "./LayOut/FolwBar"
import { getCurrentUser } from "@/Api/userApi"
import { useDispatch } from "react-redux"
import { setUser } from "@/Redux/Features/GetUser"
import { useAppSelector } from "@/Redux/Store"
import { getAllPost } from "@/Api/Post"
import { setPost } from "@/Redux/Features/SetPost"
import LoadingModal from "./Modals/LoadingModel"

interface LayoutProps {
    children: React.ReactNode
}

const Laout: React.FC<LayoutProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch()
    const { user } = useAppSelector((state) =>
        state.user
    )

    useEffect(() => {
        setLoading(true)
        getCurrentUser().then((data: any) => {
            if (data) {
                dispatch(setUser(data.data))
                setLoading(false)
            } else {
                setLoading(false)
                return
            }
            getAllPost().then((res: any) => {
                if (res) {
                    dispatch(setPost(res))
                    setLoading(false)
                } else {
                    setLoading(false)
                    return
                }
            })
        })
    },[dispatch])
    return (
        <div className="h-screen bg-black">
            <LoadingModal loading={loading} />
            <div className=" h-full ">
                <div className="grid grid-cols-12 h-full">
                    <SideBar user={user} />
                    <div className="col-span-10 md:col-span-10 lg:col-span-9 xl:col-span-7 border-x-[1px] border-neutral-800">
                        {children}
                    </div>
                    <FolwBar />
                </div>
            </div>
        </div>
    )
}

export default Laout