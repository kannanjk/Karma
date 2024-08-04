import Header from '@/Components/LayOut/Header'
import React from 'react'
import NotificationFeed from './NotificationFeed'

const Notification = () => {
    return (
        <>
            <Header label='Notification' showBackArrow />
            <NotificationFeed />
        </>
    )
}

export default Notification