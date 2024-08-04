import { useRouter } from "next/router"
import React, { useCallback, useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import LoadingModal from "../Modals/LoadingModel"

interface HeaderProps {
    label: string
    showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const handleBack = useCallback(() => {
        // setLoading(true)
        router.back()
    }, [router])
    return (
        <div className="border-b-[1px] border-neutral-800 p-5 ">
            <LoadingModal loading={loading} />
            <div className="flex flex-row items-center gap-2 ">
                {
                    showBackArrow && (
                        <BiArrowBack
                            onClick={handleBack}
                            color="white"
                            size={20}
                            className="cursor-pointer hover:opacity-70 transition"
                        />
                    )
                }
                <h1 className="text-white tet-xl font-semibold">
                    {label}
                </h1>
            </div>
        </div>
    )
}

export default Header