import React from 'react'
import { Card } from './card'
import { BiHome } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { BsFilePostFill } from "react-icons/bs";
import { GrNotification, GrLogout } from "react-icons/gr";

export const Navigation = () => {
    return (
        <Card>
            <div className='w-[200px]'>
                <h2 className="px-4 py-4">Navigation</h2>
                <a href="" className="flex flex-row items-center m-2 py-2 px-20 -mx-6 bg-blue-200 rounded-sm"><BiHome className="mr-1" />Home</a>
                <a href="" className="flex flex-row items-center m-2 py-2 px-3 transition-all hover:shadow-md hover:scale-105 hover:px-20  hover:-mx-6"><FaUserFriends className="mr-1" />Friends</a>
                <a href="" className="flex flex-row items-center m-2 py-2 px-3 transition-all hover:shadow-md hover:scale-105 hover:px-20  hover:-mx-6"><BsFilePostFill className="mr-1" />Save Post</a>
                <a href="" className="flex flex-row items-center m-2 py-2 px-3 transition-all hover:shadow-md hover:scale-105 hover:px-20  hover:-mx-10"><GrNotification className="mr-1 " />Notification</a>
                <a href="" className="flex flex-row items-center m-2 py-2 px-3 transition-all hover:shadow-md hover:scale-105 hover:px-20  hover:-mx-6"><GrLogout className="mr-1" />Log out</a>
            </div>
        </Card>
    )
}
