
import { FormCard } from "@/Components/hostFormcard";
import { PostCard } from "@/Components/PostCardlayout";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
import { Layout } from "@/Components/profilePage/layout";
import { useEffect, useState } from "react";
import { Loading } from "@/Components/simpleCompo/loading";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [postcollection, setpostcollection] = useState();


  useEffect(() => {
    fetchposter();
  });


  if (!session) return (<LoginPage />)

  function fetchposter() {
    supabase.from('posts').select('id,Content,created_at,profiles(id,avatar,name)').order('created_at', { ascending: false }).then(result => {
      setpostcollection(result.data)
    })
  }

  return (
    <Layout>
      <div className="grow">
        <FormCard onposting={fetchposter} />
        {!postcollection && <div className='flex flex-wrap items-center justify-center m-4'><Loading /></div>}
        {postcollection?.map((post, key) => (<PostCard key={key} {...post} />))}

      </div>
    </Layout >

  )
}
