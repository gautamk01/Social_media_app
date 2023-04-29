import { useSession } from '@supabase/auth-helpers-react';
import React, { useEffect, useState } from 'react';

export default function CoverPage(props) {
    const [coverUrl, setCoverUrl] = useState(false);
    const [showEditor, setShowEditor] = useState(false);
    const [File, setFile] = useState(false);



    const updateCover = (e) => {
        const file = e.target?.files[0];
        if (!file) {
            return; // user didn't select a file
        }
        const reader = new FileReader();
        reader.onload = () => {
            setCoverUrl(reader.result);
            setShowEditor(true);
        };
        reader.readAsDataURL(file);
        setFile(file)
    };

    const saveCover = () => {
        // TODO: save the cover image
        console.log(File)
        setShowEditor(false);
    };

    const cancelCover = () => {
        setCoverUrl(props.url);
        setShowEditor(false);
    };

    return (
        <>
            {/* This is when you select a New Cover image to confirm or cancel */}
            {showEditor && <div className="z-30 absolute  inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                <div className=" rounded-md p-4 h-[50vh] w-[40%]">
                    <img className="w-full h-auto" src={coverUrl} alt="Cover Image" />
                    <div className="mt-4 flex justify-center space-x-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600" onClick={saveCover}>
                            Save
                        </button>
                        <button className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600" onClick={cancelCover}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>}

            {/* This is the Cover image */}
            <div className='z-10 h-44 relative overflow-hidden flex flex-wrap items-center justify-center'>
                <img className='relative bottom-20' src={coverUrl ? coverUrl : props.url} />

                {props.editable && !showEditor && (
                    <label className='bg-white absolute right-0 bottom-0 m-1 p-1 px-2 rounded-sm shadow-md shadow-black cursor-pointer hover:bg-slate-100'>

                        <input type='file' onChange={updateCover} className='hidden' />
                        📷 Edit Cover image
                    </label>
                )}
            </div>
        </>
    );

}
