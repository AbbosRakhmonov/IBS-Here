import React from 'react'

function Input({label, name, type = 'text', ...rest}) {
    return (
        <div className={'relative z-0 flex-1 w-full'}>
            <input
                {...rest}
                id={name}
                type={type}
                placeholder=" "
                className="block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none focus:ring-0 focus:border-button-green border-gray-200"
            />
            <label
                htmlFor={name}
                className="absolute duration-300 -top-[0.25rem] -z-1 origin-0 text-text-inactive font-raleway text-base font-medium"
            >
                {label}
            </label>
        </div>
    )
}

export default Input