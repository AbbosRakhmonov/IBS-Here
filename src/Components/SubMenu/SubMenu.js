import React from 'react'
import {motion} from 'framer-motion'

function SubMenu({title = '', onClick, nth, active}) {
    const initial = {
        opacity: 0,
        scale: 0
    }

    const transition = (nth) => ({
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: nth * 0.1
    })

    const whileInView = {
        opacity: 1,
        scale: 1
    }
    return (
        <motion.li
            initial={initial}
            whileInView={whileInView}
            viewport={{once: true, threshold: 0.5}}
            transition={transition(nth)}
            className={`md:text-xl sm:flex-initial flex-1 text-center md:text-left text-[0.75rem] sm:text-md relative after:content-[""] after:absolute after:h-[2px] after:w-[100%] after:left-0 font-raleway font-semibold cursor-pointer after:bottom-0 pl-3 pt-3 pb-3 pr-3 md:pr-[6%] ${active ? 'text-black after:bg-button-green' : 'text-text-inactive hover:bg-color-line'}`}
            onClick={() => onClick(nth)}>{title}</motion.li>
    )
}

export default SubMenu