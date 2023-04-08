import React from 'react';
import { BsFilePostFill } from 'react-icons/bs'
import { CiCircleAlert } from 'react-icons/ci'
import { FaUserFriends } from 'react-icons/fa'
import { IoMdPhotos } from 'react-icons/io'
import { Avatar } from '@/Components/Avatar'
import { Card } from '@/Components/card'
import Link from 'next/link'
import { useRouter } from 'next/router';

export const ProfileHeader = () => {
    const router = useRouter();
    const { pathname } = router;
    const ispost = pathname.includes('posts') || pathname === '/profile'
    const isabout = pathname.includes('about')
    const isfriends = pathname.includes('friends')
    const isphotos = pathname.includes('photos')
    const tabClasses = '';
    const activetabClass = 'border-b-4 border-blue-300 text-blue-400';
    return (

        <Card nopadding={true}>
            <div className='z-10 h-44 overflow-hidden flex flex-wrap items-center justify-center '>
                <image className='  relative bottom-20' src='https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' />
            </div>
            <div className="flex ">
                <div className=' z-20 relative bottom-14 p-4  h-10 '>
                    <Avatar size={'w-24 h-24'} /></div>
                <div className='p-4 '>
                    <h1 className=' font-extrabold'>John Doe</h1>
                    <p className=' text-sm text-gray-400 '>Stockholm, sweden</p></div>
            </div>
            <div className='flex flex-wrap flex-row gap-4 px-5   items-center'>
                <Link href={'/profile/posts'} className={`flex mx-2 px-4 items-center ${ispost ? activetabClass : tabClasses}`}><BsFilePostFill />Posts</Link>
                <Link href={'/profile/about'} className={`flex mx-2 px-4 items-center ${isabout ? activetabClass : tabClasses}`}><CiCircleAlert className='  text-black' />About</Link>
                <Link href={'/profile/friends'} className={`flex mx-2 px-4 items-center ${isfriends ? activetabClass : tabClasses}`}><FaUserFriends />Friends</Link>
                <Link href={'/profile/photos'} className={`flex mx-2  px-4 items-center ${isphotos ? activetabClass : tabClasses}`}><IoMdPhotos />Photos</Link>
            </div>

        </Card>
    )
}
