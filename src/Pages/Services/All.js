import React from 'react'
import {map, uniqueId} from 'lodash'
import {motion} from 'framer-motion'

function All({title, descriptions}) {
    const initial = {
        opacity: 0,
        y: 100
    }

    const transition = {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
    }

    const whileInView = {
        opacity: 1,
        y: 0
    }
    return (
        <div className={'md:max-w-[45.625rem] w-full ml-auto'}>
            <motion.h2
                initial={initial}
                whileInView={whileInView}
                viewport={{once: true, threshold: 0.5}}
                transition={transition}
                className={'font-raleway font-bold text-3xl text-center md:text-left md:text-[2rem] lg:text-[2.75rem] mb-[2.25rem] text-white'}>{title}</motion.h2>
            {
                map(descriptions, (description, index) =>
                    <motion.p
                        initial={initial}
                        whileInView={whileInView}
                        viewport={{once: true, threshold: 0.5}}
                        transition={{...transition, delay: 0.1 * (index + 1)}}
                        key={uniqueId('description_')}
                        className={'lg:w-[65%] md:w-[80%] md:text-left text-center md:text-[0.95rem] font-open-sans text-base text-[#E7E7E7] mb-[1.5rem]'}>{description}</motion.p>)
            }

        </div>
    )
}

export default All