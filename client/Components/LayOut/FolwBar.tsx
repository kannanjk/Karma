import React, { useEffect, useState } from 'react'
import Avathar from '../Avathar'
import { getUsers } from '@/Api/userApi'
import LoadingModal from '../Modals/LoadingModel'

const FolwBar = () => {
    const [users, setusers] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        getUsers().then((data: any) => {
            setusers(data)
            setLoading(false) 
        })
    },[])
    return (
        <div className=' xl:col-span-3 px-6 py-4 hidden xl:block'>
            {/* <LoadingModal loading={loading} /> */}
            <div className='bg-neutral-800 rounded-xl p-4'>
                <h2 className='text-white text-xl font-semibold '>Who to follow</h2>
                <div className='flex flex-col gap-6 mt-4'>
                    {
                        users?.map((user: Record<string, any>) => (
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