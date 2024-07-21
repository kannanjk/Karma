import { BsBellFill, BsHouse } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import SideBarLogo from "./SideBarLogo"
import SideBarItem from "./SideBarItem"
import { BiLogOut } from "react-icons/bi"
import SideBarTweetButton from "./SideBarTweetButton"
import { useAppSelector } from "@/Redux/Store"

function SideBar() {
    const { user } = useAppSelector((state) =>
        state.user
    )

    const SideBar = [
        {
            lable: "Home",
            href: '/',
            icon: BsHouse
        },
        {
            lable: "Notification",
            href: '/notification',
            icon: BsBellFill
        },
        {
            lable: "chat",
            href: '/chat',
            icon: BsHouse
        },
        {
            lable: "Profile",
            href: '/user/123',
            icon: FaUser
        }
    ]
    return (
        <div className="lg:col-span-3 md:col-span-2 col-span-2 h-full pr-4 md:pr-6">
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
                            />
                        ))
                    }
                    {
                        user===null ?null: (
                            <SideBarItem onClick={() => { }} href="" icon={BiLogOut} label="LogOut" />
                        )
                    }
                    <SideBarTweetButton  />
                </div>
            </div>
        </div>
    )
}

export default SideBar