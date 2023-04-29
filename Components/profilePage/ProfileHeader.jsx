import React, { useEffect } from 'react';
import { BsFilePostFill } from 'react-icons/bs'
import { CiCircleAlert } from 'react-icons/ci'
import { FaUserFriends } from 'react-icons/fa'
import { IoMdPhotos } from 'react-icons/io'
import { Avatar } from '@/Components/Avatar'
import { Card } from '@/Components/card'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import CoverPage from '../simpleCompo/cover';

export const ProfileHeader = () => {
    const router = useRouter();
    const [profile, setProfile] = useState(null);
    const { pathname } = router;
    const userid = router.query.id;
    const supabase = useSupabaseClient();
    const session = useSession();


    useEffect(() => {
        if (!userid) { return }
        supabase.from('profiles').select().eq('id', userid).then(response => {
            if (response.error) {
                console.log(response.error);
            }
            if (response.data) {
                setProfile(response.data[0]);
            }
        })
    }, [userid]);



    const ispost = pathname.includes('posts') || pathname === '/profile'
    const isabout = pathname.includes('about')
    const isfriends = pathname.includes('friends')
    const isphotos = pathname.includes('photos')
    const tabClasses = '';
    const activetabClass = 'border-b-4 border-blue-300 text-blue-400';


    const isMYUser = userid === session?.user?.id;
    return (

        <Card nopadding={true}>
            <CoverPage url={profile?.cover} editable={isMYUser} />
            <div className="flex ">
                <div className=' z-20 relative bottom-14 p-4  h-10 '>
                    <Avatar url={profile?.avatar} size={'w-24 h-24'} /></div>
                <div className='p-4 '>
                    <h1 className=' font-extrabold uppercase'>{profile?.name}</h1>
                    <p className=' text-sm text-gray-400 '>{profile?.city}</p></div>
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
