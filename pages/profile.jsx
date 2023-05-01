import { Card } from '@/Components/card'
import { Layout } from '@/Components/simpleCompo/layout'
import { PostCard } from '@/Components/profilePage/PostCardlayout'
import { useRouter } from 'next/router'
import { ProfileHeader } from '@/Components/profilePage/ProfileHeader'
import { useEffect, useState } from 'react'
import { Aboutme } from '@/Components/profilePage/aboutme'
import { FriendInfo } from '@/Components/profilePage/friendInfo'
import Friends from '@/Components/profilePage/friends'
import ProfilePost from '@/Components/profilePage/profilepost'



function Profile({ }) {
  const [mytab, setmytab] = useState('posts');
  const [myid, setmyid] = useState('id');
  const router = useRouter();
  function pulldata(d) {
    setmytab(d);
  }


  const userid = router?.query?.id;


  return (
    <Layout>
      <ProfileHeader mytab={pulldata} />
      <Card>
        {mytab === 'posts' && <ProfilePost id={userid} />}
        {mytab === 'about' && <Aboutme />}
        {mytab === 'friends' && <Friends />}
        {mytab === 'photos' && <div>This is photos</div>}
      </Card>
    </Layout>
  )
}

export default Profile;
