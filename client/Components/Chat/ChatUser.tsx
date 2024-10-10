import React, { useEffect, useRef, useState } from 'react'
import Avathar from '../Avathar'
import { BiPhone } from 'react-icons/bi'
import { BsCameraVideoFill } from 'react-icons/bs'
import Button from '../Button'
import { RiGalleryLine } from "react-icons/ri";
import { FaSmile } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { getUser } from '@/Api/userApi'
import LoadingModal from '../Modals/LoadingModel'
import { getChat, sentMessage } from '@/Api/ChatApi'
import { useAppSelector } from '@/Redux/Store'
import { getSocket } from './Socket/socket'
import ChatBox from './ChatBox'
import toast from 'react-hot-toast'

function ChatUser() {
  const [user1, setUser1] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const [chat1, setChat1] = useState<any>({})
  const [typing, setTyping] = useState<any>({})
  const [typingTimeOut, setTypingTimeout] = useState<any>();
  const [newMessage, setNewMessages] = useState('')
  const [onlineUsers, setuser] = useState([])
  const [roomId, setRoomId] = useState<any>({})
  const [sent, setSent] = useState<any>({})
  
  const router = useRouter()

  const { chat } = router.query
  
  const handleClick = (e: any) => {
    e.preventDefault()
    
    const message = {
      receverId: chat,
      message: newMessage,
      chatId: chat1?._id,
      roomId: roomId
    }
    if (message.receverId && message.chatId && message.message ) {
      setSent(message)
      socket.emit("message", message)
      setNewMessages('')
    } else {
      toast.error("Try Again")
      setLoading(false)
    }
  }

  const { user } = useAppSelector((state) =>
    state.user
  )

  const socket = getSocket()
  useEffect(() => {

    socket.emit('user-joined', user?.id)
    socket.on('get-users', (use) => {
      setuser(use)
    })
    onlineUsers.map((user: any) => {
      if (user.userId == chat) {
        setRoomId(user.socketId)
      }
    })
  })

  useEffect(() => {
    setLoading(true)
    getUser(Number(chat)).then((data: any) => {
      if (data) {
        setUser1(data?.data)
        setLoading(false)
      } else {
        setLoading(false)
        return
      }
    })
    const fet = {
      senderId: user?.id,
      receverId: chat
    }
    getChat(fet).then((dat: any) => {
      setChat1(dat?.data)
    })

    const b = 'typing-started-server' + user?.id
    socket.on(b, (chatId) => {
      setTyping(chatId)
    })
    const a = 'typing-stoped-server' + user?.id
    socket.on(a, (typ) => {
      setTyping(null)
    });
  }, [chat, socket, user?.id])
  const typi = {
    chatId: chat1?._id,
    userId: chat
  }
  return (
    <div className=' h-screen w-[83%] sm:w-full col-span-12 fixed sm:relative z-10 sm:col-span-9 bg-gray-600'>
      <LoadingModal loading={loading} />
      <div className='flex sticky sm:top-[0%] top-[12%]  bg-gray-400'>
        <div className='w-[50%]  gap-4 font-bold text-white p-3 flex'>
          <Avathar userId={chat as string} />
          <div>
            <h1>{user1?.name} </h1>
            {
              typing?.userId == user?.id ? <p className='text-white'>typing...</p> : null
            }
          </div>
        </div>
        <div className='w-[50%] items-center justify-end  gap-5 font-bold text-white p-3 flex'>
          <BiPhone size={23} className='mr-5 cursor-pointer' />
          <BsCameraVideoFill size={23} className='mr-5 cursor-pointer' />
        </div>
      </div>
      <ChatBox user={user} chatId={chat1?._id} />
      <div className='bg-gray-400  sticky top-[90%]'>
        <div className='w-full bg-gray-500 p-3 gap-4 items-center flex'>
          <input
            value={newMessage}
            onChange={(e) => {
              setNewMessages(e.target.value)
              socket.emit('typing-started-client', typi)
              setTypingTimeout(
                setTimeout(() => {
                  socket.emit("typing-stopped-client", typi);
                }, 1000)
              );
            }}
            type="text"
            className='w-[70%] p-2 outline-none rounded-2xl placeholder:p-3 text-purple-900 '
            placeholder="Enter you'r text... "
          />
          <FaSmile color='white' size={23} />
          <RiGalleryLine color='white' size={23} />
          <div className=' w-[20%] flex justify-end'>
            <button
              onClick={(e: any) => {
                handleClick(e)
              }}
              className=' disabled:opacity-70 disabled:cursor-not-allowed rounded-full
            font-semibold hover:opacity-80 transition border-2 w-fit bg-sky-500 text:md px-4 py-2 text-white '>
              Sent
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatUser