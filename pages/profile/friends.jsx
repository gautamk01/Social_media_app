import React from 'react'
import { ProfileHeader } from '@/Components/profilePage/ProfileHeader'
import { Layout } from '@/Components/profilePage/layout'
import { Card } from '@/Components/card'
import { Avatar } from '@/Components/Avatar'

export default function friends() {
    return (
        <Layout> <ProfileHeader />
            <Card>
                <h1 className='font-extrabold text-[30px]'>Friends</h1>
                <div className='flex gap-2'>
                    <Avatar size={'w-12 h-12'} />
                    <div><p className=' font-medium text-[20px] m-0'>Gautam</p>
                        <p className=' font-thin'>5 mutual Friends</p></div>
                </div>
            </Card></Layout>
    )
}
