import { getUser } from '@/Api/Protection'
import React, { useEffect, useState } from 'react'
import Avathar from '../Avathar'
import Image from 'next/image'

interface UserProp {
  userId: string
}

const UserHero: React.FC<UserProp> = ({ userId }) => {
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    getUser(Number(userId)).then((data: any) => {
      setUser(data)
    })
  })
  return (
    <div>
      <div className='bg-neutral-700 text-white h-44 relative'>
        {
          user?.image && (
            <Image
              src={user?.image}
              fill
              alt='Cover image'
              style={{ objectFit: "cover" }}
            />)
        }
        <div className='absolute -bottom-16 left-4'>
          <Avathar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  )
}

export default UserHero