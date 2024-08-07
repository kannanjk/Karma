import ChatHead from '@/Components/Chat/ChatHead'
import ChatUser from '@/Components/Chat/ChatUser'
import React from 'react'

function chat() {
    return (
        <div className='sm:grid h-full bg-black grid-cols-12'>
            <ChatHead />
            <ChatUser/>
        </div>
    )
}

export default chat