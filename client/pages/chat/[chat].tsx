import ChatHead from '@/Components/Chat/ChatHead'
import ChatUser from '@/Components/Chat/ChatUser'
import LayOut from '@/Components/Chat/LayOut'
import { useRouter } from 'next/router'
import React from 'react'

const Chat = () => {
   
    
    return (
        <div className='sm:grid h-full bg-black sm:grid-cols-12'>
            <LayOut>
                <ChatUser />
            </LayOut>
        </div>
    )
}

export default Chat