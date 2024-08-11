import { BsBellFill, BsHouse, BsChatHeart } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import SideBarLogo from "./SideBarLogo"
import SideBarItem from "./SideBarItem"
import { BiLogOut, BiSearchAlt } from "react-icons/bi"
import SideBarTweetButton from "./SideBarTweetButton"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
import { GetNotifications } from "@/Api/userApi"

interface User {
    user: any
}

const SideBar: React.FC<User> = ({ user }) => {
    const [notification, setNotification] = useState([])
    const [noti, setNoti] = useState<boolean>(false)

    useEffect(() => {
        if (user?.id) {
            const io = {
                userId: user?.id
            }
            GetNotifications(io).then((da: any) => {
                if (da?.success) {
                    setNotification(da?.data)
                } else {
                    return
                }
            })
        }
        if (notification) {
            notification?.map((rt: any) => {
                if (rt.read === true) {
                    return setNoti(true)
                }
            })
        }
    }, [notification, user?.id])

    const SideBar = [
        {
            lable: "Home",
            href: '/',
            icon: BsHouse
        },
        {
            lable: "Chat",
            href: `/chat/:id`,
            icon: BsChatHeart
        },
        {
            lable: "Find",
            href: `/user/:id`,
            icon: BiSearchAlt,
            style: "block xl:hidden"
        },
        {
            lable: "Notification",
            href: `/notification/${user?.id}`,
            icon: BsBellFill,
            auth: true,
            alert: noti
        },
        {
            lable: "Profile",
            href: `/users/${user?.id}`,
            icon: FaUser,
            auth: true
        }
    ]
    const LogOut = () => {
        localStorage.clear()
        location.reload()
        toast.success("Logout success")
    }
    return (
        <div className="lg:col-span-3
        xl:col-span-2 md:col-span-2 col-span-2 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-center">
                <div className="space-y-2 lg:w-[230px] ">
                    <SideBarLogo />
                    {
                        SideBar.map((item, ind) => (
                            <SideBarItem
                                key={ind}
                                href={item.href}
                                label={item.lable}
                                icon={item.icon}
                                auth={item.auth}
                                alert={item.alert}
                                style={item.style}
                            />
                        ))
                    }
                    {
                        user && (
                            <SideBarItem onClick={() => LogOut()} href="" icon={BiLogOut} label="LogOut" />
                        )
                    }
                    <SideBarTweetButton />
                </div>
            </div>
        </div>
    )
}

export default SideBar