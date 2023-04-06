import React from 'react'
import { Card } from './card'
import { BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { TbMoodCheck } from "react-icons/tb";
import { Avatar } from './Avatar';

export const FormCard = () => {
    return (
        <Card><div className="flex gap-3">
            <div>
                <Avatar />
            </div>
            <textarea className='grow p-2 border border-gray-200 rounded-md' placeholder='what is on your mind? GK'></textarea>
        </div>
            <div className="flex flex-wrap items-center justify-center mt-3 gap-4">
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><BsPeople />People</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><GoLocation />Checkin</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><TbMoodCheck />Mood</button>
                <div className='grow text-right p-2'>
                    <button className=' bg-blue-500 text-white p-2 rounded-lg px-4 mr-4 hover:bg-blue-900'>Share</button>
                </div>
            </div>
        </Card>
    )

}
