import React, { useEffect, useState } from 'react'
import ChatHead from './ChatHead'
import LoadingModal from '../Modals/LoadingModel'
import { useAppSelector } from '@/Redux/Store'
import { getUserChat } from '@/Api/ChatApi'
import { useDispatch } from 'react-redux'
import { setChat } from '@/Redux/Features/SetChat'

interface LayoutProps {
  children: React.ReactNode
}

const LayOut: React.FC<LayoutProps> = ({ children }) => {
  
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const { user } = useAppSelector((state) =>
    state.user
  )

  useEffect(() => {
    const userId = { 
      userId: user?.id
    }
    getUserChat(userId).then((data: any) => {
      if (data) {
        dispatch(setChat(data))
      }
    })
  }, [dispatch, user?.id])
 
  return (
    <>
      <LoadingModal loading={loading} />
      <ChatHead />
      <>
        {children}
      </>
    </>
  )
}

export default LayOut