import React from 'react'

export const Avatar = ({ size = 'w-12 h-12', url }) => {
    return (
        <div className={`${size}  rounded-full overflow-hidden`}>
            <img src={url} alt='image' className='h-full w-full object-cover' />
        </div>
    )
}
