
import { FormCard } from "@/Components/hostFormcard";
import { PostCard } from "@/Components/PostCardlayout";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
import { Layout } from "@/Components/profilePage/layout";
import { useEffect, useState } from "react";
import { Loading } from "@/Components/simpleCompo/loading";
import { UserContext } from "@/Components/Contexts/UserContext";
// import TimeAgo from 'javascript-time-ago';
// import en from 'javascript-time-ago/locale/en';

// // // Register the "en" locale data
// TimeAgo.addDefaultLocale(en);

export default function Home() {
  const session = useSession();
  const [Profile, setProfile] = useState(null);
  const supabase = useSupabaseClient();
  const [postcollection, setpostcollection] = useState();

  useEffect(() => {
    fetchposter();
  }, [])
  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }

    supabase.from('profiles').select().eq('id', session?.user?.id).then(result => {
      if (result.data?.length) {
        setProfile(result.data[0])
      }
    })
  }, [session?.user?.id]);


  if (!session) return (<LoginPage />)

  function fetchposter() {
    supabase.from('posts').select('id,Content,created_at,photos,profiles(id,avatar,name)').order('created_at', { ascending: false }).then(result => {
      setpostcollection(result.data)
    })
  }

  return (
    <Layout>
      <UserContext.Provider value={{ Profile: Profile }}>
        <div className="grow">
          <FormCard onposting={fetchposter} />
          {!postcollection && <div className='flex flex-wrap items-center justify-center m-4'><Loading /></div>}
          {postcollection?.map((post, key) => (<PostCard key={key} {...post} />))}

        </div>
      </UserContext.Provider>

    </Layout >

  )
}
