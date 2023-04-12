import React, { useContext, useEffect, useState } from 'react'
import { Card } from './card'
import { BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { TbMoodCheck } from "react-icons/tb";
import { Avatar } from './Avatar';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Loading } from './simpleCompo/loading';
import { AlerterError, AlerterSuccess } from './simpleCompo/alerter';
import { UserContext } from './Contexts/UserContext';
import { IoMdPhotos } from "react-icons/io";
import { ScaleLoader } from 'react-spinners';

export const FormCard = (props) => {

    const [content, setcontent] = useState('');
    const [Success, setSuccess] = useState(false);
    const [uploads, setUploads] = useState([]);
    const [Isuploading, setIsuploading] = useState(false);
    const [Error, setError] = useState(0);
    const supabase = useSupabaseClient();
    const session = useSession();
    const { Profile } = useContext(UserContext);



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


    //Function to add the phots
    async function addphotos(e) {
        const files = e.target.files;
        if (files.length > 0) {
            setIsuploading(true);
            for (const fs of files) {
                const newName = Date.now() + fs.name;
                const response = await supabase.storage.from('photos').upload(newName, fs);
                if (response.data) {
                    const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/photos/' + response.data.path;
                    setUploads(prevUploads => [...prevUploads, url]);
                } else {
                    console.log(response);
                }
            }
            setIsuploading(false);
        }

    }

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

            {uploads.length > 0 && (
                <div className="flex gap-2">
                    {uploads.map(upload => (
                        <div className="mt-2" >
                            <img src={upload} alt="" className="w-auto h-24 rounded-md" />

                        </div>
                    ))}
                    {Isuploading && <ScaleLoader color="#36d7b7" />}
                </div>
            )

            }

            <div className="flex flex-wrap items-center justify-center mt-3 gap-4">
                <label className='flex flex-wrap items-center justify-center p-2 gap-1 hover:text-cyan-900 cursor-pointer'><input type='file' className='hidden' onChange={addphotos} /><IoMdPhotos />Photos</label>
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
