import { Card } from "@/Components/card";
import { BiHome } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { BsFilePostFill } from "react-icons/bs";
import { GrNotification, GrLogout } from "react-icons/gr";

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/3" >
        <Card>
          <div className=" bg-slate-500 flex "></div>
          <h2 className=" ">Navigation</h2>
          <a href="" className="flex flex-row items-center m-2"><BiHome className="mr-1" />Home</a>
          <a href="" className="flex flex-row items-center m-2"><FaUserFriends className="mr-1" />Friends</a>
          <a href="" className="flex flex-row items-center m-2"><BsFilePostFill className="mr-1" />Save Post</a>
          <a href="" className="flex flex-row items-center m-2"><GrNotification className="mr-1" />Notification</a>
          <a href="" className="flex flex-row items-center m-2"><GrLogout className="mr-1" />Log out</a>
        </Card>
      </div>
      <div className="grow">
        <Card>Form Here</Card>
        <Card>post</Card>
      </div>
    </div >
  )
}
