import React, { useEffect, useState } from "react"
import SideBar from "./LayOut/SideBar"
import FolwBar from "./LayOut/FolwBar"
import { getCurrentUser} from "@/Api/userApi"
import { useDispatch } from "react-redux"
import { setUser } from "@/Redux/Features/GetUser"
import { useAppSelector } from "@/Redux/Store"

interface LayoutProps {
    children: React.ReactNode
}

const Laout: React.FC<LayoutProps> = ({ children }) => {
    const dispatch = useDispatch()
    const { user } = useAppSelector((state) =>
        state.user
    )

    useEffect(() => {
        getCurrentUser().then((data: any) => {
            if (data) {
                dispatch(setUser(data.data))
            } else {
                return
            }
        })
       
    }) 
    return (
        <div className="h-screen bg-black">
            <div className=" h-full ">
                <div className="grid grid-cols-12 h-full">
                    <SideBar user={user} />
                    <div className="col-span-10 md:col-span-10 lg:col-span-7 border-x-[1px] border-neutral-800">
                        {children}
                    </div>
                    <FolwBar  />
                </div>
            </div>
        </div>
    )
}

export default Laout