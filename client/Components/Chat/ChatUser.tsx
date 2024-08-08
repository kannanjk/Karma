import React from 'react'
import Avathar from '../Avathar'
import { BiMapPin, BiPhone } from 'react-icons/bi'
import { BsCameraVideoFill } from 'react-icons/bs'
import Button from '../Button'
import { RiGalleryLine } from "react-icons/ri";
import { FaSmile } from 'react-icons/fa'


function ChatUser() {
  return (
    <div className=' h-screen w-[83%] sm:w-full col-span-12 fixed sm:relative sm:col-span-9 bg-gray-600'>
      <div className='flex sticky sm:top-[0%] top-[12%]  bg-gray-400'>
        <div className='w-[50%]  gap-4 font-bold text-white p-3 flex'>
          <Avathar userId={''} />
          <h1>kannan</h1>
        </div>
        <div className='w-[50%] items-center justify-end  gap-5 font-bold text-white p-3 flex'>
          <BiPhone size={23} className='mr-5 cursor-pointer' />
          <BsCameraVideoFill size={23} className='mr-5 cursor-pointer' />
        </div>
      </div>
      <div className='w-full p-3  no-scrollbar  sm:h-[80%] h-[63%] overflow-x-auto text-white'>

        {/* Client chat */}
        <div className="mb-4">
          <div className="flex items-end">
            <div className="max-w-xs mx-2 bg-gray-200 text-gray-700 rounded-lg px-4 py-2">
              <p>Hello! How are you?</p>
            </div>
          </div>
        </div>
        {/* User Chat */}
        <div className="mb-4 flex justify-end">
          <div className="max-w-xs mx-2 bg-blue-600 text-white rounded-lg px-4 py-2">
            <p> I m good, thanks! How about you?</p>
          </div>
        </div>
        
      </div>
      <div className='bg-gray-400  sticky top-[90%]'>
        <div className='w-full bg-gray-500 p-3 gap-4 items-center flex'>
          <input type="text" className='w-[70%] p-2 outline-none rounded-2xl placeholder:p-3 text-purple-900 ' placeholder="Enter you'r text... " />
          <FaSmile color='white' size={23} />
          <RiGalleryLine color='white' size={23} />
          <div className=' w-[20%] flex justify-end'>
            <Button outline label={'Sent'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatUser