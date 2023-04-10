import React from 'react'

export const AlerterSuccess = () => {
    return (
        <div className=" animate-pulse absolute -top-14 flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
            </div>
        </div>
    )
}

export const AlerterError = () => {
    return (
        <div className=" animate-pulse absolute -top-14 flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
            </div>
        </div>
    )
}
