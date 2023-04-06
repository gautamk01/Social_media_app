import { ProfileHeader } from '@/Components/profilePage/ProfileHeader'
import { Aboutme } from '@/Components/profilePage/aboutme'
import { Layout } from '@/Components/profilePage/layout'
import React from 'react'

export default function about() {
    return (
        <Layout> <ProfileHeader />
            <Aboutme />
        </Layout>

    )
}
