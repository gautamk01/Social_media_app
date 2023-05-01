import React, { useEffect, useState } from 'react'
import { Card } from '../card'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { PostCard } from './PostCardlayout';
import { UserContext } from "@/Components/Contexts/UserContext";


export default function ProfilePost(props) {

    const router = useRouter();
    const supabase = useSupabaseClient();
    const session = useSession()
    const [postContent, setpostContent] = useState([]);
    const [Profile, setProfile] = useState(null);
    const userid = router?.query?.id;

    useEffect(() => {
        async function fetchData() {
            if (userid) { // check if userid is defined
                const { data, error } = await supabase
                    .from('posts')
                    .select(`*, profiles:author (id,avatar,name)`)
                    .eq('author', userid).order('created_at', { ascending: false });
                if (error) {
                    console.error(error);
                } else {
                    setpostContent(data);
                }
            }
        }

        fetchData();
    }, [userid]); // add userid to the dependencies array

    useEffect(() => {
        supabase.from('profiles').select().eq('id', session?.user?.id).then(result => {
            if (result.data?.length) {
                setProfile(result.data[0])
            }
        })
    }, [session?.user?.id])

    console.log(postContent[0]?.profiles)

    return (
        <UserContext.Provider value={{ Profile: Profile }}>
            <div>
                <h1 className='font-extrabold text-[30px] m-3'>Post</h1>
                <div className='flex flex-col gap-4'>
                    {postContent.map((post, key) => (<PostCard key={key} {...post} />))}
                </div>
            </div>
        </UserContext.Provider>

    )
}
