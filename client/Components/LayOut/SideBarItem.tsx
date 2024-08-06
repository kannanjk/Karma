import { useAppSelector } from "@/Redux/Store"
import { BsDot } from 'react-icons/bs'
import { useRouter } from "next/router"
import React, { useCallback, useState } from "react"
import { IconType } from "react-icons"
import useLoginModal from "@/hooks/UseLoginModal"
import LoadingModal from "../Modals/LoadingModel"

interface SideBarItemProp {
  label: string
  href?: string
  icon: IconType
  onClick?: () => void
  auth?: boolean
  alert?: boolean
}

const SideBarItem: React.FC<SideBarItemProp> = ({
  label, href, icon: Icon, onClick, auth, alert
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { user } = useAppSelector((state) =>
    state.user
  )
  const router = useRouter()
  const loginModal = useLoginModal()
  const handleClick = useCallback(() => {
    if (onClick) {
      setLoading(true)
      return onClick()
    }
    if (auth && !user) {
      loginModal.onOpen()
    }
    else if (href) {
      router.push(href)
    }
  }, [onClick, auth, user, href, loginModal, router])
  return (
    <div
      onClick={handleClick}
      className="flex flex-row items-center">
      <LoadingModal loading={loading} />
      <div className="relative rounded-full h-14 w-14 flex 
            items-center justify-center p-4 hover:bg-slate-300
            hover:bg-opacity-10 cursor-pointer lg:hidden
            ">
        <Icon size={28} color="white" />
        {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
      </div>
      <div className="
            relative hidden lg:flex items-center gap-4 p-4 rounded-full
            hover:bg-black hover:text-white hover:opacity-85 cursor-pointer
            ">
        <Icon size={26} color="white" />
        <p className="
                hidden lg:block text-white text-lg
                ">
          {label}
        </p>
        {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
      </div>
    </div>
  )
}

export default SideBarItem