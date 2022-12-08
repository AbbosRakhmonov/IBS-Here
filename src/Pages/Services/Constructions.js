import React from 'react'
import Checkmark from '../../Components/Checkmark/Checkmark'
import {motion} from 'framer-motion'

function Constructions() {
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
        <div className={'md:max-w-[45.625rem] w-full ml-auto'}>
            <motion.h2
                initial={initial}
                whileInView={whileInView}
                viewport={{once: true, threshold: 0.5}}
                transition={transition}
                className={'font-raleway font-bold text-3xl text-center md:text-left lg:text-[2.75rem] md:text-[2rem] mb-[2.25rem] text-white'}>Construction
                & Development
            </motion.h2>
            <motion.p
                initial={initial}
                whileInView={whileInView}
                viewport={{once: true, threshold: 0.5}}
                transition={{...transition, delay: 0.1}}
                className={'md:w-[80%] md:text-left text-center font-open-sans text-base md:text-sm text-[#E7E7E7] mb-[4.25rem]'}>Ibs
                Here Inc offers a full
                range of
                residential and commercial construction
                services. Whether you want to upgrade your apartment or you have an investment-type of
                commercial or residential development plan in mind - do not hesitate to give us a call! Our team
                will help you achieve your goals and save a ton of money!
            </motion.p>

            <div className={'flex sm:flex-row flex-col sm:justify-start items-center gap-[3.75rem] md:gap-[1.2rem]'}>
                <ul className={'list-none flex flex-col gap-[2.5rem]'}>
                    <motion.li
                        initial={listInitial}
                        whileInView={listWhileInView}
                        viewport={{once: true, threshold: 0.5}}
                        transition={listTransition(1)}
                        className={'flex items-start gap-[1rem]'}>
                        <Checkmark/>
                        <p className={'font-raleway text-lg md:text-[0.95rem] text-white font-semibold'}>Apartment
                            complexes</p>
                    </motion.li>
                    <motion.li
                        initial={listInitial}
                        whileInView={listWhileInView}
                        viewport={{once: true, threshold: 0.5}}
                        transition={listTransition(2)}
                        className={'flex items-start gap-[1rem]'}>
                        <Checkmark/>
                        <p className={'font-raleway text-lg md:text-[0.95rem] text-white font-semibold'}>Hotels, motels,
                            resorts</p>
                    </motion.li>
                    <motion.li
                        initial={listInitial}
                        whileInView={listWhileInView}
                        viewport={{once: true, threshold: 0.5}}
                        transition={listTransition(3)}
                        className={'flex items-start gap-[1rem]'}>
                        <Checkmark/>
                        <p className={'font-raleway text-lg md:text-[0.95rem] text-white font-semibold'}>Residential
                            communities</p>
                    </motion.li>
                </ul>
                <ul className={'list-none flex flex-col gap-[2.5rem]'}>
                    <motion.li
                        initial={listInitial}
                        whileInView={listWhileInView}
                        viewport={{once: true, threshold: 0.5}}
                        transition={listTransition(4)}
                        className={'flex gap-[1rem]'}>
                        <Checkmark/>
                        <p className={'font-raleway text-lg md:text-[0.95rem] text-white font-semibold'}>Gas stations,
                            truck stops</p>
                    </motion.li>
                    <motion.li
                        initial={listInitial}
                        whileInView={listWhileInView}
                        viewport={{once: true, threshold: 0.5}}
                        transition={listTransition(5)}
                        className={'flex gap-[1rem]'}>
                        <Checkmark/>
                        <p className={'font-raleway text-lg md:text-[0.95rem] text-white font-semibold'}>Retail stores,
                            fast-food</p>
                    </motion.li>
                    <motion.li
                        initial={listInitial}
                        whileInView={listWhileInView}
                        viewport={{once: true, threshold: 0.5}}
                        transition={listTransition(6)}
                        className={'flex gap-[1rem]'}>
                        <Checkmark/>
                        <p className={'font-raleway text-lg md:text-[0.95rem] text-white font-semibold'}>Old-citizen
                            communities</p>
                    </motion.li>
                </ul>
            </div>
        </div>
    )
}

export default Constructions