import { Avatar } from "@/Components/Avatar";
import { Card } from "@/Components/card";
import { FormCard } from "@/Components/hostFormcard";

import { Navigation } from "@/Components/Navigation";
import { PostCard } from "@/Components/PostCardlayout";
import { useSession } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
import { Layout } from "@/Components/profilePage/layout";
import { useState } from "react";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [post, setpost] = useState();





  if (!session) return (<LoginPage />)
  return (
    <Layout>
      <div className="grow">
        <FormCard />
        <Card >
          <PostCard />
        </Card>
      </div>
    </Layout >

  )
}
