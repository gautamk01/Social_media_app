import React, { useEffect, useState } from 'react'
import { Card } from './card'
import { BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { TbMoodCheck } from "react-icons/tb";
import { Avatar } from './Avatar';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

import { Loading } from './simpleCompo/loading';
import { AlerterError, AlerterSuccess } from './simpleCompo/alerter';

export const FormCard = (props) => {
    const [Profile, setProfile] = useState(null);
    const [content, setcontent] = useState('');
    const [Success, setSuccess] = useState(false);
    const [Error, setError] = useState(0);
    const supabase = useSupabaseClient();
    const session = useSession();
    useEffect(() => {
        supabase.from('profiles').select().eq('id', session.user.id).then(result => {
            if (result.data.length) {
                setProfile(result.data[0])
            }
        })


    }, [supabase, session.user.id]);


    if (!Profile) return (<div className='flex flex-wrap items-center justify-center m-4'><Loading /></div>)

    function createpost() {
        setSuccess(false);
        if (content.length > 1) {
            setError(0);
            supabase.from('posts').insert({ Content: content, author: session.user.id })
                .then(response => {
                    if (!response.error) {
                        if (props.onposting) {
                            props.onposting()
                        }
                        setcontent('');
                        setSuccess(true);
                    }

                });

        }
        else {
            setError(Error + 1);
        }
    }

    console.log(Error);
    return (

        <Card>
            {Error > 0 &&
                Array.from({ length: Error }, (v, i) => i).map((error, index) => (
                    <AlerterError key={index} />
                ))}
            {Success ? <AlerterSuccess /> : <></>}
            <div className="flex gap-3">
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
