import React, { useEffect, useState } from 'react'
import { Card } from './card'
import { BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { TbMoodCheck } from "react-icons/tb";
import { Avatar } from './Avatar';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Alert } from "flowbite-react";
import { Loading } from './simpleCompo/loading';

export const FormCard = () => {
    const [Profile, setProfile] = useState(null);
    const [content, setcontent] = useState('');
    const supabase = useSupabaseClient();
    const session = useSession();
    useEffect(() => {
        supabase.from('profiles').select().eq('id', session.user.id).then(result => {
            if (result.data.length) {
                setProfile(result.data[0])
            }
        })
    }, []);

    if (!Profile) return (<div className='flex flex-wrap items-center justify-center m-4'><Loading /></div>)

    function createpost() {
        supabase.from('posts').insert({ Content: content, author: session.user.id })
            .then(response => { console.log(response) });
        setcontent('');
    }


    return (
        <Card><div className="flex gap-3">
            <div>
                <Avatar url={Profile?.avatar} />
            </div>
            <textarea value={content}
                onChange={e => setcontent(e.target.value)}
                className='grow p-2 border border-gray-200 rounded-md' placeholder={`what is on your mind? ${Profile?.name}`}></textarea>
        </div>
            <div className="flex flex-wrap items-center justify-center mt-3 gap-4">
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><BsPeople />People</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><GoLocation />Checkin</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><TbMoodCheck />Mood</button>
                <div className='grow text-right p-2'>
                    <button onClick={createpost} className=' bg-blue-500 text-white p-2 rounded-lg px-4 mr-4 hover:bg-blue-900'>Share</button>
                </div>
            </div>
        </Card>
    )

}
