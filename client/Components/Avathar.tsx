import { getUser } from "@/Api/userApi"
import { useAppSelector } from "@/Redux/Store"
import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"

interface AvatharProp {
    userId?: string
    isLarge?: boolean
    hasBorder?: boolean
    ischat?: boolean
    currentUser?: string
}

const Avathar: React.FC<AvatharProp> = ({
    userId, hasBorder, isLarge, currentUser, ischat
}) => {
    const [user, setUser] = useState<any>({})

    const router = useRouter()
    const onClick = useCallback((event: any) => {
        event.stopPropagation();
        const url = ischat ? `/chat/${userId}` : `/users/${userId}`
        router.push(url)
    }, [ischat, router, userId])

    useEffect(() => {
        getUser(Number(userId)).then((data: any) => {
            if (data?.success) {
                setUser(data?.data)
            } else {
                return
            }
        })
    })

    return (
        <div className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        ${isLarge ? 'h-32' : 'h-12'}
        ${isLarge ? 'w-32' : 'w-12'}
        rounded-full hover:opacity-90 transition cursor-pointer relative
        `}>
            <Image
                fill
                style={{
                    objectFit: "cover",
                    borderRadius: '100%'
                }}
                alt="Avathar"
                onClick={onClick}
                src={user?.profileImage ? user?.profileImage : `/image/avathar.jpg`}
            />
        </div>
    )
}

export default Avathar