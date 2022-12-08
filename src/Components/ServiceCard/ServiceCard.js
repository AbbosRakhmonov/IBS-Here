import React from 'react'
import {motion} from 'framer-motion'

function ServiceCard({nth, title = '', img, active = false, onCardClick}) {
    const initial = {
        opacity: 0,
        scale: 0
    }

    const transition = (nth) => ({
        duration: 0.6,
        ease: 'easeInOut',
        delay: nth * 0.1
    })

    const whileInView = {
        opacity: 1,
        scale: 1
    }
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={{once: true, threshold: 0.5}}
            transition={transition(nth)}
            onClick={() => onCardClick(nth)}
            className={`lg:w-[18rem] md:p-[10%] lg:p-[10%] p-[4%_2%] lg:h-[14rem] md:w-[13rem] md:h-[11rem] md:flex-grow-0 flex-grow cursor-pointers sm:flex-inital flex-1 flex flex-col items-center justify-center rounded-none md:rounded-[6px] ${active ? 'drop-shadow-none bg-color-black text-white' : 'shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white text-inactive hover:bg-footer-bg hover:text-white'}`}>
            <img src={img} className={'md:w-1/5'} alt="icon"/>
            <p className={'font-raleway md:text-left text-center text-sm lg:text-lg md:text-sm font-semibold mt-[0.93rem]'}>{title}</p>
        </motion.div>
    )
}

export default ServiceCard