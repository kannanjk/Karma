import React, { useEffect, useState } from 'react'
import { getUserChat } from '@/Api/ChatApi'
import { useAppSelector } from '@/Redux/Store'
import ChatHead1 from './ChatHead1'
import LoadingModal from '../Modals/LoadingModel'

interface UserProp {
  users?: Record<string, any>[]
}

const ChatHead: React.FC<UserProp> = ({ users }) => {
  // const [users, setUsers] = useState<any>([])
  // const [loading, setLoading] = useState<boolean>(false)

  // const { user } = useAppSelector((state) =>
  //   state.user
  // )

  // useEffect(() => {
  //   const userId = {
  //     userId: user?.id
  //   }
  // // setLoading(true)    
  //   getUserChat(userId).then((data: any) => {
  //     if (data) {
  //       setUsers(data)
  //       // setLoading(false)
  //     }
  //   })
  // }, [user?.id])
  return (
    <div className='sm:col-span-3 w-full sticky top-[0%] sm:h-screen text-white'>
      {/* <LoadingModal loading={loading} /> */}
      <div className='overflow-y-scroll   no-scrollbar sm:overflow-x-scroll sm:h-screen flex flex-row sm:block w-full '>
        {
          users?.map((data: any, ind: number) => (
            <ChatHead1
              key={ind}
              userId={data?.member[0]}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ChatHead