import React, { useState } from 'react'
import { Avatar } from './Avatar'
import { AiOutlineHeart } from "react-icons/Ai";
import { BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Moreon } from './morecomp';
import Link from 'next/link';



export const PostCard = () => {
    const [boxer, setboxer] = useState(false)
    return (
        <div>
            <div className="flex flex-row gap-3 ">
                <div >
                    <Link href={'/profile'}><span className=' cursor-pointer'><Avatar /></span></Link></div>
                <div className='grow'><p><Link href={'/profile'} className="font-semibold cursor-pointer hover:underline">Jhone Doe</Link> Shared a <a className=" text-cyan-500"> Post</a></p>
                    <p className="Text-gray-500"> 2 hours ago</p></div>
                <div className=''><button onClick={() => { setboxer(!boxer) }}>More</button>
                    {boxer ? <Moreon /> : <></>}
                </div>
            </div>
            <div className="my-3 mx-3 p-4">
                <p>I have to tell this, This is an amazing place to viste, Almost I spent Hours looking at the
                    the place. it is so beautifull I can't express my feeling through words i wanted to Express
                    trough feel. Come to Vist New York You will Love it!!
                </p>
                <div className='m-3'>
                    <img src="https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
                </div>
            </div>
            <div className='flex flex-wrap items-center  mt-3 gap-4'>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><AiOutlineHeart />72</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><BsPeople />11</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><GoLocation />4</button>
            </div>
            <div className='flex gap-3'>
                <div><Avatar /></div>
                <textarea className='grow border border-gray-400 rounded-[12px] h-10 px-4 p-1' placeholder='Leave a Comment'></textarea>
            </div>
        </div>
    )
}
