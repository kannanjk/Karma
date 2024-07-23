import { useAppSelector } from '@/Redux/Store'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Avathar from '../Avathar'
import { getUsers } from '@/Api/Protection'

const FolwBar = () => {
    const [users, setusers] = useState([])
    
    useEffect(() => {
        getUsers().then((data:any)=>{
            setusers(data)
        })
    })
    return (
        <div className=' lg:col-span-3 md:col-span-2 px-6 py-4 hidden lg:block'>
            <div className='bg-neutral-800 rounded-xl p-4'>
                <h2 className='text-white text-xl font-semibold '>Who to follow</h2>
                <div className='flex flex-col gap-6 mt-4'>
                    {
                        users.map((user: Record<string, any>) => (
                            <div key={user.id} className='flex flex-row gap-4'>
                                <Avathar userId={user.id} />
                                <div className='flex flex-col'>
                                    <p className='text-white font-semibold text-sm'>
                                        {user.name}
                                    </p>
                                    <p className='text-neutral-400 text-sm'>
                                        @{user.email}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FolwBar