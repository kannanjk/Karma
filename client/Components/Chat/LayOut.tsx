import React, { useEffect, useState } from 'react'
import ChatHead from './ChatHead'
import LoadingModal from '../Modals/LoadingModel'
import { useAppSelector } from '@/Redux/Store'
import { getUserChat } from '@/Api/ChatApi'

interface LayoutProps {
    children: React.ReactNode
}

const LayOut: React.FC<LayoutProps> = ({ children }) => {
    const [users, setUsers] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
 
  const { user } = useAppSelector((state) =>
    state.user
  )

  useEffect(() => {
    const userId = {
      userId: user?.id
    }
  setLoading(true)    
    getUserChat(userId).then((data: any) => {
      if (data) {
        setUsers(data)
        setLoading(false)
      }
    })
  }, [user?.id])
    return (
        <>
        <LoadingModal loading={loading} />
            <ChatHead users={users} /> 
            <>
                {children}
            </>
        </>
    )
}

export default LayOut