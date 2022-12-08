import React from 'react'

function TextArea({label, name}) {
    return (
        <div className={'relative z-0 flex-1 w-full'}>
            <textarea name={name}
                      placeholder={' '}
                      className={'w-full h-[6rem] pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none focus:ring-0 focus:border-button-green border-gray-200'}></textarea>
            <label
                htmlFor={name}
                className="absolute duration-300 top-3 -z-1 origin-0 text-text-inactive font-raleway text-base font-medium"
            >
                {label}
            </label>
        </div>
    )
}

export default TextArea