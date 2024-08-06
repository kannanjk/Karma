import { getUser } from "@/Api/userApi"
import { useAppSelector } from "@/Redux/Store"
import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"

interface AvatharProp {
    userId: string
    isLarge?: boolean
    hasBorder?: boolean
    currentUser?: string
}

const Avathar: React.FC<AvatharProp> = ({
    userId, hasBorder, isLarge, currentUser
}) => {
    const [user, setUser] = useState<any>({})
    console.log(user);

    const router = useRouter()
    const onClick = useCallback((event: any) => {
        event.stopPropagation();
        const url = `/users/${userId}`
        router.push(url)
    }, [router, userId])


    useEffect(() => {
        getUser(Number(userId)).then((data: any) => {
            if (data?.data.data) {
                setUser(data?.data.data)
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