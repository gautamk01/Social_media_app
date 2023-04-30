import React from 'react';
import { BsFillCameraFill } from 'react-icons/bs';
import { Avatar } from '../Avatar';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Loading } from './loading';


export const AvatarUpdate = (props) => {

    const [coverUrl, setCoverUrl] = React.useState(props.aurl);
    const [isuploading, setisuploading] = React.useState(false);
    const supabase = useSupabaseClient();
    const session = useSession();

    async function updateCover(e) {
        const file = e.target?.files[0];
        if (!file) {
            return; // user didn't select a file
        }
        const reader = new FileReader();
        reader.onload = () => {
            setCoverUrl(reader.result);
        };
        reader.readAsDataURL(file);
        setisuploading(true)
        const newName = Date.now() + file.name;
        const { data, error } = await supabase.storage.from("avatars").upload(newName, file);
        setisuploading(false)
        if (error) throw error
        if (data) {
            // console.log(data)
            const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/avatars/' + data.path;
            supabase.from('profiles').update({ avatar: url }).eq('id', session.user.id).then(({ data, error }) => {
                if (error) throw error;
            })
        }

    };



    return (


        <>

            <Avatar url={coverUrl ? coverUrl : props.aurl} size={'w-24 h-24'} />
            {isuploading && <Loading />}
            <label className=' absolute top-20 right-0 bg-white h-fit w-fit p-3 rounded-full shadow shadow-black cursor-pointer'>
                <input onChange={updateCover} type="file" className='hidden' />
                <BsFillCameraFill /></label>
        </>
    )
}
