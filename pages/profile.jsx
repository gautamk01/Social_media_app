import { Avatar } from '@/Components/Avatar'
import { Card } from '@/Components/card'
import { Layout } from '@/Components/profilePage/layout'


import React from 'react'
import { PostCard } from '@/Components/PostCardlayout'
import { useRouter } from 'next/router'

import { ProfileHeader } from '@/Components/profilePage/ProfileHeader'

export default function Profile() {
  const router = useRouter()
  const { pathname } = router;
  const ispost = pathname.includes('posts') || pathname === '/profile'
  const isabout = pathname.includes('about')
  const isfriends = pathname.includes('friends')
  const isphotos = pathname.includes('photos')
  const tabClasses = '';
  const activetabClass = '';

  return (
    <Layout>
      <ProfileHeader />
      <Card><PostCard /></Card>

    </Layout>
  )
}