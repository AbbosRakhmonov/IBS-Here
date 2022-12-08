import MainButton from '../Buttons/MainButton'
import {motion} from 'framer-motion'

import BG_Video from '../../videos/video1.mp4'

function Header() {
    const initial = {opacity: 0, y: 100}
    const animate = {opacity: 1, y: 0}
    const transition = (delay) => ({duration: .5, ease: 'easeOut', delay: 0.05 * delay})

    return (
        <header>
            <div className={`h-[38rem] sm:h-[48rem] relative`}>
                <div className={'w-full h-full absolute -z-[1]'}>
                    <video autoPlay loop muted className={'w-full h-full object-center object-cover'}>
                        <source src={BG_Video} title={'ibs projects'} placeholder={'bg-video'} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="bg-black bg-opacity-70 h-full z-10">
                    <div className="container mx-auto h-full flex flex-col justify-center">
                        <div
                            className={'flex flex-col justify-center md:items-start items-center md:pl-[5%] md:text-left text-center'}>
                            <motion.h6
                                initial={initial}
                                whileInView={animate}
                                viewport={{once: true, threshold: 0.5}}
                                transition={transition(1)}
                                className="text-sm sm:text-xl lg:mb-[3%] mb-[6%] md:text-lg text-white font-medium font-raleway relative before:content-[''] ml-[0.875rem] before:absolute before:-left-[0.875rem] before:top-1 before:w-[6px] before:h-[13px] before:bg-light-green before:rounded-tl-[27px] after:content-[''] after:absolute after:left-0 after:w-full after:h-[1px] after:bg-light-green after:-bottom-1">Welcome!
                            </motion.h6>
                            <motion.h1
                                initial={initial}
                                whileInView={animate}
                                viewport={{once: true, threshold: 0.5}}
                                transition={transition(2)}
                                className={'text-[1.3rem] lg:text-[2rem] sm:text-3xl xl:text-[2.8rem] 2xl:text-[3.5rem] capitalize font-raleway font-bold text-white lg:leading-tight'}>IBS
                                Here<br/>Our name speaks for itself !
                            </motion.h1>
                            <motion.p
                                initial={initial}
                                whileInView={animate}
                                viewport={{once: true, threshold: 0.5}}
                                transition={transition(3)}
                                className={'font-open-sans text-[0.75rem] sm:text-sm w-full md:text-[1rem] 2xl:text-base text-white lg:w-[40%] md:w-[60%] mt-[10%] sm:mt-[2%]'}>What
                                “IBS”
                                stands for -
                                will be a life-long discovery of business and investment
                                opportunities available in the United States of America!
                            </motion.p>
                            <motion.p
                                initial={initial}
                                whileInView={animate}
                                viewport={{once: true, threshold: 0.5}}
                                transition={transition(4)}
                                className={'font-open-sans text-[0.75rem] sm:text-sm w-full md:text-[1rem] 2xl:text-base text-white lg:w-[45%] md:w-[65%] mt-[2%]'}>Our
                                team at IBS develops solutions that fit the right people with the right mind.
                            </motion.p>
                            <motion.p
                                initial={initial}
                                whileInView={animate}
                                viewport={{once: true, threshold: 0.5}}
                                transition={transition(5)}
                                className={'font-open-sans text-[0.75rem] sm:text-sm w-full sm:mb-[10%] md:text-[1rem] 2xl:text-base text-white mt-[2%] mb-[8%] lg:mb-[4%]'}>Welcome
                                to
                                IBS!
                            </motion.p>
                            <MainButton onclick={() => {
                                const services = document.querySelector('#services')
                                const navbarHeight = document.querySelector('nav').clientHeight
                                window.scrollTo({
                                    top: services.offsetTop - navbarHeight,
                                    behavior: 'smooth'
                                })
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header