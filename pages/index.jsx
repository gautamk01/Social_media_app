import { Avatar } from "@/Components/Avatar";
import { Card } from "@/Components/card";
import { FormCard } from "@/Components/hostFormcard";

import { Navigation } from "@/Components/Navigation";
import { PostCard } from "@/Components/PostCardlayout";

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/3" >
        <Navigation />
      </div>
      <div className="grow">
        <FormCard />
        <Card>
          <PostCard />
        </Card>
      </div>
    </div >
  )
}
