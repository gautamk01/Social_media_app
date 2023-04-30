import React from 'react'
import { TbEdit } from 'react-icons/tb'


export const EditForm = (props) => {
    const [editProfile, setEditProfile] = React.useState(true);
    const decider = props.currentuser === editProfile;
    return (
        <div className=" flex grow">
            {editProfile && <div className='p-4 py-4 h-[90px] grow '>
                <h1 className=' font-extrabold uppercase'>{props.name}</h1>
                <p className=' text-sm text-gray-400 '>{props.city}</p>
            </div>}
            {decider && <div onClick={() => { setEditProfile(!editProfile) }} className=' bg-white h-[30px] m-1 p-1 px-2 rounded-sm shadow-md shadow-black cursor-pointer hover:bg-slate-100 flex flex-wrap gap-3 items-center'><TbEdit />Edit Profile</div>}

            {!editProfile && <div className=' p-1 h-[90px]  grow  flex flex-wrap '>
                <div className='h-full flex flex-wrap flex-col  '>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-1 px-4  " id="grid-first-name" type="text" placeholder={props.name} />
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-1 px-4 " id="grid-first-name" type="text" placeholder={props.city} />
                </div>

                <div className='h-full flex flex-wrap grow  justify-end'>
                    <button className='bg-white h-[30px] m-1 p-1 px-2 rounded-sm shadow-md shadow-black cursor-pointer hover:bg-slate-100 flex flex-wrap gap-3 items-center'> Save </button>
                    <button className='bg-white h-[30px] m-1 p-1 px-2 rounded-sm shadow-md shadow-black cursor-pointer hover:bg-slate-100 flex flex-wrap gap-3 items-center' onClick={() => {
                        setEditProfile(!editProfile)
                    }}>  Cancel </button>
                </div>
            </div>
            }
        </div>


    )
}
