import { useAppSelector } from "@/Redux/Store"
import axios from "axios"
import React from "react"
import { IconType } from "react-icons"
import { useSelector } from "react-redux"
const API = axios.create({baseURL:"http://127.0.0.1:5000"}) 

interface SideBarItemProp {
    label: string
    href: string
    icon: IconType
    onClick?: () => void
}

const SideBarItem: React.FC<SideBarItemProp> = ({
    label, href, icon: Icon, onClick
}) => {
    const { user } = useAppSelector((state) =>
        state.user
      )
      const getUser = async () => {
        try {
          const res = await API.post('/user/auth/', {
            token: localStorage.getItem('token')
          })
        } catch (error) {
          console.log();
        }
      }
    return (
        <div className="flex flex-row items-center">
            <div className="relative rounded-full h-14 w-14 flex 
            items-center justify-center p-4 hover:bg-slate-300
            hover:bg-opacity-10 cursor-pointer lg:hidden
            ">
                <Icon size={28} color="white" />
            </div>
            <div className="
            relative hidden lg:flex items-center gap-4 p-4 rounded-full
            hover:bg-slate-300 hover:opacity-10 cursor-pointer
            ">
                <Icon size={28} color="white" />
                <p className="
                hidden lg:block text-white text-xl
                ">
                    {label}
                    </p>
            </div>
        </div>
    )
}

export default SideBarItem