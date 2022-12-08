import React from 'react'
import {motion} from 'framer-motion'

function InvestCard({title = '', price = 0, classes = '', nth}) {
    const listInitial = {
        opacity: 0,
        scale: 0.5
    }

    const listTransition = (delay) => ({
        duration: 0.3,
        ease: 'easeInOut',
        delay: 0.1 * delay
    })

    const listWhileInView = {
        opacity: 1,
        scale: 1
    }
    return (
        <motion.div
            initial={listInitial}
            whileInView={listWhileInView}
            viewport={{once: true, threshold: 0.5}}
            transition={listTransition(nth)}
            className={`text-center md:flex-[0_32%] sm:flex-[0_49%] flex-1 ${classes}`}>
            <h4 className={'font-bold font-raleway text-3xl lg:text-5xl md:text-4xl mb-[0.93rem]'}><span
                className={'text-button-green'}>$</span> {price} +</h4>
            <p className={'font-raleway font-semibold text-lg text-text-inactive'}>{title}</p>
        </motion.div>
    )
}

export default InvestCard