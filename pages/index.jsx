import { Avatar } from "@/Components/Avatar";
import { Card } from "@/Components/card";
import { FormCard } from "@/Components/hostFormcard";

import { Navigation } from "@/Components/Navigation";
import { PostCard } from "@/Components/PostCardlayout";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
import { Layout } from "@/Components/profilePage/layout";
import { useEffect, useState } from "react";

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
        {!postcollection && <div>hello</div>}
        {postcollection?.map((post, key) => (<PostCard key={key} {...post} />))}

      </div>
    </Layout >

  )
}
