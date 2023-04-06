import React from 'react'

export const Moreon = () => {
    return (
        <div className='h-[200px] w-[200px] absolute left-[66%] bg-white shadow-lg border transition-all delay-75 flex flex-wrap items-center justify-center rounded-sm'>
            <ul>
                <li className='p-1 flex flex-wrap items-center justify-center hover:scale-110 hover:shadow-md  hover:-mx-10 cursor-pointer'>Save Post</li>
                <li className='p-1 flex flex-wrap items-center justify-center hover:scale-110 hover:shadow-md  hover:-mx-10 cursor-pointer'>Turn Notification</li>
                <li className='p-1 flex flex-wrap items-center justify-center hover:scale-110 hover:shadow-md  hover:-mx-10 cursor-pointer'>Hide Post</li>
                <li className='p-1 flex flex-wrap items-center justify-center hover:scale-110 hover:shadow-md  hover:-mx-10 cursor-pointer'>Delete</li>
                <li className='p-1 flex flex-wrap items-center justify-center hover:scale-110 hover:shadow-md  hover:-mx-10 cursor-pointer'>Report</li>
            </ul>
        </div>
    )
}
