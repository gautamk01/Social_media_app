import React from 'react'
import { TbEdit } from 'react-icons/tb'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';


export const EditForm = (props) => {
    const supabase = useSupabaseClient();
    const session = useSession();
    const [Name, setName] = React.useState(props.name);
    const [City, setCity] = React.useState(props.city);
    function Namechanger(e) {
        setName(e.target.value)
    }

    function citychanger(e) {
        setCity(e.target.value)
    }

    async function updateDetailes() {
        console.log('updated')
        supabase.from('profiles').update({ name: Name, city: City }).eq('id', session.user.id).then((response) => {
            console.log(response)
        })
        setEditProfile(!editProfile)


    }


    const [editProfile, setEditProfile] = React.useState(true);
    const decider = props.currentuser === editProfile; //This mainly to disable the editability for Non users
    return (
        <div className=" flex grow">
            {editProfile && <div className='p-4 py-4 h-[90px] grow '>
                <h1 className=' font-extrabold uppercase'>{Name ? Name : props.name}</h1>
                <p className=' text-sm text-gray-400 '>{City ? City : props.city}</p>
            </div>}
            {decider && <div onClick={() => { setEditProfile(!editProfile) }} className=' bg-white h-[30px] m-1 p-1 px-2 rounded-sm shadow-md shadow-black cursor-pointer hover:bg-slate-100 flex flex-wrap gap-3 items-center'><TbEdit />Edit Profile</div>}

            {!editProfile && <div className=' p-1 h-[90px]  grow  flex flex-wrap '>
                <div className='h-full flex flex-wrap flex-col  '>
                    <input onChange={Namechanger} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-1 px-4  " id="grid-first-name" type="text" placeholder={Name ? Name : props.name} />
                    <input onChange={citychanger} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-1 px-4 " id="grid-first-name" type="text" placeholder={City ? City : props.city} />
                </div>

                <div className='h-full flex flex-wrap grow  justify-end'>
                    <button onClick={updateDetailes} className='bg-white h-[30px] m-1 p-1 px-2 rounded-sm shadow-md shadow-black cursor-pointer hover:bg-slate-100 flex flex-wrap gap-3 items-center'> Save </button>
                    <button className='bg-white h-[30px] m-1 p-1 px-2 rounded-sm shadow-md shadow-black cursor-pointer hover:bg-slate-100 flex flex-wrap gap-3 items-center' onClick={() => {
                        setEditProfile(!editProfile)
                        setName(props.name)
                        setCity(props.city)
                    }}>  Cancel </button>
                </div>
            </div>
            }
        </div>


    )
}
