import React from 'react'

function Alert({isError, message}) {
    return (
        <div
            className={`px-4 py-3 fixed z-[200] top-0 w-full ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
            role="alert">
            <span className="block sm:inline md:text-left text-center text-md">
                {(isError && !message) ? 'Something went wrong, please try again later' : (isError && message) ? message : 'Your message has been sent successfully'}
            </span>
        </div>
    )
}

export default Alert