import React from 'react'
import {map, uniqueId} from 'lodash'
import MainButton from '../Buttons/MainButton'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {motion} from 'framer-motion'

function Project({texts = [], images, videos, buttonText}) {
    const settings = {
        showArrows: true,
        showStatus: false,
        showIndicators: false,
        showThumbs: false,
        infiniteLoop: true,
        emulateTouch: true,
        autoPlay: true,
        interval: 2000,
        transitionTime: 1000,
    }
    const throwSection = (id) => {
        const element = document.getElementById(id)
        const navbarHeight = document.querySelector('nav').clientHeight
        window.scrollTo({
            top: element.offsetTop - navbarHeight,
            behavior: 'smooth'
        })
    }

    const initial = {
        opacity: 0,
        x: -100
    }

    const transition = (nth) => ({
        duration: 0.6,
        delay: nth * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
    })

    const whileInView = {
        opacity: 1,
        x: 0
    }
    return (
        <div className={'lg:grid lg:grid-cols-12 lg:gap-[4rem] flex flex-col gap-[2rem] overflow-x-hidden'}>
            <div className="col-span-5 lg:pt-5 md:block flex flex-col items-center justify-center">
                {
                    map(texts, (text) => <motion.p
                        initial={initial}
                        whileInView={whileInView}
                        viewport={{once: true, threshold: 0.5}}
                        transition={transition(texts.indexOf(text))}
                        key={uniqueId('text_')}
                        className={'mb-[15%] sm:mb-[5%] sm:text-left text-center text-sm lg:text-base md:text-md font-semibold font-open-sans text-text-inactive'}>{text}</motion.p>)
                }
                <MainButton text={buttonText} onclick={() => {
                    throwSection('contact')
                }}/>
            </div>
            <div className="col-span-7">
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, threshold: 0.5}}
                    transition={{duration: 0.6, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96]}}
                >
                    <Carousel {...settings}>
                        {
                            images && map(images, (image) => <img key={uniqueId('image_')} loading={'lazy'}
                                                                  className={'object-center object-cover w-full h-[40vh] sm:h-[29em]'}
                                                                  src={image} height={'26rem'} width={'100%'}
                                                                  alt="theme"/>)
                        }
                    </Carousel>
                </motion.div>
            </div>
        </div>
    )
}

export default Project