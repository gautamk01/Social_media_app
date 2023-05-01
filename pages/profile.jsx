
import { Card } from '@/Components/card'
import { Layout } from '@/Components/simpleCompo/layout'
import { PostCard } from '@/Components/profilePage/PostCardlayout'
import { useRouter } from 'next/router'

import { ProfileHeader } from '@/Components/profilePage/ProfileHeader'
import { useState } from 'react'
import { Aboutme } from '@/Components/profilePage/aboutme'
import { FriendInfo } from '@/Components/profilePage/friendInfo'

export default function Profile() {

  const [mytab, setmytab] = useState('post')
  function pulldata(d) {
    setmytab(d)
  }
  return (
    <Layout>
      <ProfileHeader mytab={pulldata} />
      <Card>
        {mytab === 'posts' && <PostCard />}
        {mytab === 'about' && <Aboutme />}
        {mytab === 'friends' && <FriendInfo />}
        {mytab === 'photos' && <div>This is photos</div>}

      </Card>

    </Layout>
  )
}