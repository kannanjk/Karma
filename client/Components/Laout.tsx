import React from "react"
import SideBar from "./LayOut/SideBar"
import FolwBar from "./LayOut/FolwBar"

interface LayoutProps {
    children: React.ReactNode
}

const Laout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen bg-black">
            <div className=" h-full ">
                <div className="grid grid-cols-12 h-full">
                    <SideBar />
                    <div className="col-span-10 md:col-span-10 lg:col-span-6 border-x-[1px] border-neutral-800">
                        {children}
                    </div>
                    <FolwBar />
                </div>
            </div>
        </div>
    )
}

export default Laout