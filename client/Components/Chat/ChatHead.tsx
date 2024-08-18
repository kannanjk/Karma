import React, { useEffect, useState } from 'react'
import { getUserChat } from '@/Api/ChatApi'
import { useAppSelector } from '@/Redux/Store'
import ChatHead1 from './ChatHead1'
import LoadingModal from '../Modals/LoadingModel'
import { getSocket } from './Socket/socket'


const ChatHead = () => {
  const [onlineUsers, sestOnlineUser] = useState([])

  const { user } = useAppSelector((state) =>
    state.user
  )
  const { chat } = useAppSelector((state) =>
    state.chat
  )
  useEffect(() => {
    const socket = getSocket()
    socket.emit('user-joined', user?.id)
    socket.on('get-users', (use) => {
      sestOnlineUser(use)
    })
  })
  const checkOnlineStatuse = (dat: any) => {
    const online = onlineUsers.find((user: any) => user.userId === dat)
    return online ? true : false
  }
  return (
    <div className='sm:col-span-3 w-full sticky top-[0%] sm:h-screen text-white'>
      {/* <LoadingModal loading={loading} /> */}
      <div key='ui' className='overflow-y-scroll no-scrollbar sm:overflow-x-scroll sm:h-screen flex flex-row sm:block w-full '>
        {
          chat?.map((data: any, ind: number) => (
            <div key={ind}>
              { 
                data?.member.map((dat: any, ind: number) => (
                  dat == user?.id ? '' :
                    <ChatHead1
                      key={ind}
                      userId={dat}
                      online={checkOnlineStatuse(dat)}
                    />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ChatHead