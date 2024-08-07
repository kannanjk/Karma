import React from 'react'
import Avathar from '../Avathar'
import { BiMapPin, BiPhone } from 'react-icons/bi'
import { BsCameraVideoFill } from 'react-icons/bs'
import Button from '../Button'
import { RiGalleryLine } from "react-icons/ri";
import { FaSmile } from 'react-icons/fa'


function ChatUser() {
  return (
    <div className='w-full h-screen sm:col-span-9 bg-gray-700 '>
      <div className='flex  bg-gray-400'>
        <div className='w-[50%]  gap-4 font-bold text-white p-3 flex'>
          <Avathar userId={''} />
          <h1>kannan</h1>
        </div>
        <div className='w-[50%] items-center justify-end  gap-5 font-bold text-white p-3 flex'>
          <BiPhone size={23} className='mr-5 cursor-pointer' />
          <BsCameraVideoFill size={23} className='mr-5 cursor-pointer' />
        </div>
      </div>
      <div className='w-full no-scrollbar h-[80%] overflow-x-auto text-white'>

       
      
        <h1> Chat body</h1>

        <h1> Chat body</h1>
        <h1> Chat body</h1>
        <h1> Chat body</h1>
        <h1> Chat body</h1>
        <h1> Chat body</h1>
        <h1> Chat body</h1>
        <h1> Chat body</h1>
        <h1> Chat body</h1>
        <h1> Chat body</h1>

<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>

<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>

<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>
<h1> Chat body</h1>


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