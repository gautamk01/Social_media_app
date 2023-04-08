import React from 'react'

export const Avatar = ({ size = 'w-12 h-12', url }) => {
    return (
        <div className={`${size}  rounded-full overflow-hidden`}>
            <image src={url} alt='image' />
        </div>
    )
}
