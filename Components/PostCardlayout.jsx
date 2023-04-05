import React from 'react'
import { Avatar } from './Avatar'

export const PostCard = () => {
    return (
        <div>
            <div className="flex flex-row gap-3 ">
                <div><Avatar /></div>
                <div><p><a className="font-semibold">Jhone Doe</a> Shared a <a className=" text-cyan-500"> Post</a></p>
                    <p className="Text-gray-500"> 2 hours ago</p></div>
            </div>
            <div className="my-3 mx-3">
                <p>asjfnsjndfajksndfljnasdlfn lsdnf jlansdjl fndsl fnas lfn dsln safsda fdsfa
                    ansdfjn adf nasdn fandfjnads nfandfgljadn andkl fnasldn flaksdnfla adkf
                    a fjkadnjlfn alndfkldanskl fnalndfsaklnd flasdn fkldsnalk fandsklfn al</p>
                <div className=''>
                    <img src="https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
                </div>
            </div>
            <div className='flex flex-wrap items-center  mt-3 gap-4'>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'><AiOutlineHeart />72</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'>11</button>
                <button className='flex flex-wrap items-center justify-center p-2 gap-1'>4</button>
            </div>
        </div>
    )
}
