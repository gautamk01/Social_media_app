import { Avatar } from '@/Components/Avatar'
import { Card } from '@/Components/card'
import { Layout } from '@/Components/profilePage/layout'


import React from 'react'
import { PostCard } from '@/Components/PostCardlayout'
import { useRouter } from 'next/router'

import { ProfileHeader } from '@/Components/profilePage/ProfileHeader'

export default function Profile() {
  const router = useRouter()

  return (
    <Layout>
      <ProfileHeader />
      <Card><PostCard /></Card>

    </Layout>
  )
}