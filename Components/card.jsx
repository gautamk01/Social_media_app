import React from 'react'

export const Card = ({ children, nopadding }) => {
    let content = 'bg-white shadow-md shadow-gray-300 rounded-md  mb-5 overflow-hidden '
    if (!nopadding) {
        content += ' p-4'
    }
    return (
        <div className={content}>{children}</div>
    )
}
