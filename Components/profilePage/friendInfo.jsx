import React from 'react'
import { Avatar } from '@/Components/Avatar'

export const FriendInfo = () => {
    return (
        <div className='flex gap-2  border-b-2 px-5 -mx-4'>
            <Avatar size={'w-12 h-12'} />
            <div><p className=' font-medium text-[20px] m-0'>Gautam</p>
                <p className=' font-thin'>5 mutual Friends</p></div>
        </div>
    )
}
