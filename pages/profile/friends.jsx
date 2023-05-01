import React from 'react'
import { ProfileHeader } from '@/Components/profilePage/ProfileHeader'
import { Layout } from '@/Components/simpleCompo/layout'
import { Card } from '@/Components/card'
import { Avatar } from '@/Components/Avatar'
import { FriendInfo } from '@/Components/profilePage/friendInfo'

export default function friends() {
    return (
        <Layout> <ProfileHeader />
            <Card>
                <h1 className='font-extrabold text-[30px] m-3'>Friends</h1>
                <div className='flex flex-col gap-4'>
                    <FriendInfo />
                    <FriendInfo />
                    <FriendInfo />
                    <FriendInfo />
                    <FriendInfo />
                </div>
            </Card>

        </Layout>
    )
}
