import { Avatar } from '@/Components/Avatar'
import { Card } from '@/Components/card'
import { Layout } from '@/Components/profilePage/layout'
import { BsFilePostFill } from 'react-icons/bs'
import { CiCircleAlert } from 'react-icons/ci'
import { FaUserFriends } from 'react-icons/fa'
import { IoMdPhotos } from 'react-icons/io'

import React from 'react'
import { PostCard } from '@/Components/PostCardlayout'

export default function profile() {
  return (
    <Layout>
      <Card nopadding={true}>
        <div className='z-10 h-44 overflow-hidden flex flex-wrap items-center justify-center '>
          <img className='  relative bottom-20' src='https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' />
        </div>
        <div className="flex ">
          <div className=' z-20 relative bottom-14 p-4  h-10 '>
            <Avatar size={'w-24 h-24'} /></div>
          <div className='p-4 '>
            <h1 className=' font-extrabold'>John Doe</h1>
            <p className=' text-sm text-gray-400 '>Stockholm, sweden</p></div>
        </div>
        <div className='flex flex-wrap flex-row gap-4 px-5 py-3  items-center'>
          <div className='flex items-center'><BsFilePostFill />Posts</div>
          <div className='flex items-center'><CiCircleAlert className='  text-black' />About</div>
          <div className='flex items-center'><FaUserFriends />Friends</div>
          <div className='flex items-center'><IoMdPhotos />Photos</div>
        </div>

      </Card>
      <Card><PostCard /></Card>

    </Layout>
  )
}