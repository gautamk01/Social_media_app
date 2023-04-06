import React from 'react'
import { Card } from './card'
import { BiHome } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { BsFilePostFill } from "react-icons/bs";
import { GrNotification, GrLogout } from "react-icons/gr";
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navigation = () => {
    const router = useRouter();
    const { pathname } = router;
    const nonactiveElementClasses = 'flex flex-row items-center m-2 py-2 px-3 transition-all hover:shadow-md hover:scale-105 hover:px-20  hover:-mx-6'
    const activeElementClasses = "flex flex-row items-center m-2 py-2 px-20 -mx-6 bg-blue-200 rounded-sm"
    return (
        <Card >
            <div className='w-[200px]'>
                <h2 className="px-4 py-4">Navigation</h2>
                <Link href="/" className={pathname === '/' ? activeElementClasses : nonactiveElementClasses}><BiHome className="mr-1" />Home</Link>
                <Link href="" className={nonactiveElementClasses}><FaUserFriends className="mr-1" />Friends</Link>
                <Link href="" className={nonactiveElementClasses}><BsFilePostFill className="mr-1" />Save Post</Link>
                <Link href="" className={nonactiveElementClasses}><GrNotification className="mr-1 " />Notification</Link>
                <Link href="" className={nonactiveElementClasses}><GrLogout className="mr-1" />Log out</Link>
            </div>
        </Card >
    )
}
