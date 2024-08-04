import { GetNotifications, updateNotifications } from '@/Api/userApi'
import { useAppSelector } from '@/Redux/Store'
import React, { useEffect, useState } from 'react'
import { BsTwitter } from 'react-icons/bs'

const NotificationFeed = () => {
    const { user } = useAppSelector((state) =>
        state.user
    )
    const [notiCount, setNotificationCount] = useState(0)
    const [notification, setNotification] = useState([])
    console.log(notification);

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
            updateNotifications(io)
        }
        if (user && user.notifications) {
            setNotificationCount(Object.keys(user?.notifications).length)
        }

    }, [notification, user])
    return (
        <>
            {
                notiCount === 0 ?
                    <div className='text-neutral-600 text-center p-6 text-xl'>
                        No notifications
                    </div>
                    :
                    <div className='flex flex-col'>
                        {
                            notification?.map((items: any, ind: number) => (
                                <div
                                    key={ind}
                                    className='flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800 '>
                                    <BsTwitter color='white' size={32} />
                                    <p className='text-white'>
                                        {items.message}
                                    </p>
                                </div>
                            ))
                        }

                    </div>
            }
        </>
    )
}

export default NotificationFeed