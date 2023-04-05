import React from 'react'
import { Card } from './card'
import { BiHome } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { BsFilePostFill } from "react-icons/bs";
import { GrNotification, GrLogout } from "react-icons/gr";

export const Navigation = () => {
    return (
        <Card>
            <h2 className="px-3 py-4">Navigation</h2>
            <a href="" className="flex flex-row items-center m-2 py-1"><BiHome className="mr-1" />Home</a>
            <a href="" className="flex flex-row items-center m-2 py-1 "><FaUserFriends className="mr-1" />Friends</a>
            <a href="" className="flex flex-row items-center m-2 py-1"><BsFilePostFill className="mr-1" />Save Post</a>
            <a href="" className="flex flex-row items-center m-2 py-1"><GrNotification className="mr-1" />Notification</a>
            <a href="" className="flex flex-row items-center m-2 py-1"><GrLogout className="mr-1" />Log out</a>
        </Card>
    )
}
