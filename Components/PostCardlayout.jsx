import React, { useEffect, useState } from 'react'
import { Avatar } from './Avatar'
import { BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Moreon } from './morecomp';
import Link from 'next/link';
import { Card } from './card';
import TimeAgo from "react-timeago";



export const PostCard = (props) => {
    const [boxer, setboxer] = useState(false)
    return (
        <Card>
            <div className="flex flex-row gap-3 ">
                <div >
                    <Link href={'/'}><span className=' cursor-pointer'><Avatar url={props?.profiles?.avatar} /></span></Link></div>
                <div className='grow'><p><Link href={'/'} className="font-semibold cursor-pointer hover:underline">{props?.profiles?.name}</Link> Shared a <a className=" text-cyan-500"> Post</a></p>
                    <p className="Text-gray-500">{
                        <TimeAgo date={props?.created_at} />
                    }</p></div>
                <div className=''><button onClick={() => { setboxer(!boxer) }}>More</button>
                    {boxer ? <Moreon /> : <></>}
                </div>
            </div>
            <div className="my-3 mx-3 p-4">
                <p>{props.Content}</p>
                {/* <div className='m-3'>
                    <img alt='landscape' src="https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
                </div> */}
            </div>
            <div className='flex flex-wrap items-center  mt-3 gap-4'>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'>72</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><BsPeople />11</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><GoLocation />4</button>
            </div>
            {/* <div className='flex gap-3'>
                <div><Avatar /></div>
                <textarea className='grow border border-gray-400 rounded-[12px] h-10 px-4 p-1' placeholder='Leave a Comment'></textarea>
            </div> */}
        </Card>
    )
}
