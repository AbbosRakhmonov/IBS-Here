import React from 'react'
import {BsCheck} from 'react-icons/bs'

function Checkmark() {
    return (
        <div
            className={'min-w-[1.75rem] max-w-[1.75rem] min-h-[1.75rem] max-h-[1.75rem] rounded-full flex items-center justify-center bg-white-20 text-white text-2xl'}>
            <BsCheck/>
        </div>
    )
}

export default Checkmark