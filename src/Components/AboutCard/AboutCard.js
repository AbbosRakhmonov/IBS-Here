import React from 'react'
import ReadMore from '../ReadMore'
import {motion} from 'framer-motion'

function AboutCard({name, description, img, nth}) {
    const initial = {
        opacity: 0,
        scale: 0
    }

    const transition = (delay) => ({
        duration: 1,
        ease: 'linear',
        delay: 0.1 * delay
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
            className={'grid-cols-1 p-[1.75rem] bg-white'}>
            <div
                className={'flex items-center mb-[1.5rem] gap-[1.25rem] pb-[1.5rem] border-b-[1px] border-b-black/[.3]'}>
                <img src={img} width={'4rem'} height={'4rem'} alt={name} loading={'lazy'}
                     className={'sm:min-w-[5rem] sm:max-w-[5rem] sm:min-h-[5rem] sm:max-h-[5rem] min-w-[3.5rem] object-center object-fit rounded-full'}/>
                <h3 className={'font-raleway font-semibold text-[1.375rem] md:text-base flex items-center gap-[0.5rem]'}>
                        <span
                            className={'inline-block bg-button-green w-[0.625rem] h-[4px] rounded-full'}></span><span>{name}</span>
                </h3>
            </div>
            <ReadMore>
                {description}
            </ReadMore>
        </motion.div>
    )
}

export default AboutCard