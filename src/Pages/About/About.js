import React from 'react'
import AboutCard from '../../Components/AboutCard/AboutCard'
import {motion} from 'framer-motion'
import Robert from '../../Images/robert.jpg'
import Khassan from '../../Images/khassan.jpg'
import Ruslan from '../../Images/ruslan.jpg'

function About() {
    const initial = {
        opacity: 0,
        x: -100
    }

    const transition = {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
    }

    const whileInView = {
        opacity: 1,
        x: 0
    }
    return (
        <section id={'about'} className={'about-bg pt-[3.125rem] pb-[10%] lg:pb-[12.5rem] md:pb-[5rem]'}>
            <div className="container mx-auto">
                <motion.h1
                    initial={initial}
                    whileInView={whileInView}
                    viewport={{once: true, threshold: 0.5}}
                    transition={transition}
                    className={'font-raleway section-title text-center'}>Who we are ?
                </motion.h1>
                <motion.p
                    initial={initial}
                    whileInView={whileInView}
                    viewport={{once: true, threshold: 0.5}}
                    transition={{...transition, delay: 0.1}}
                    className={'font-open-sans md:text-md md:w-[80%] text-center section-text mt-[2.5rem] mb-[3.75rem] lg:w-[50%] mx-auto'}>Ibs
                    Here is managed by a team of enthusiastic and creative entrepreneurs linked to each other for over
                    20 years through friendship and partnership.
                </motion.p>
                <div className={'grid md:grid-cols-3 gap-[2rem] lg:gap-[4.25rem] md:gap-[3rem] md:px-[2%]'}>
                    <AboutCard
                        nth={1} name={'Bakhtiyor Khassanov'} position={'Inventor'}
                        img={Khassan}
                        description={['Mr. Khassanov is a talented inventor, engineer and \n' +
                        'construction specialist with a creative mindset.\n' +
                        '\n' +
                        'For the past 20 years Mr. Khassanov has been devoted to international trade, construction, and manufacturing activities in the U.S..\n']}/>
                    <AboutCard
                        nth={2} name={'Robert Freeman'} position={'Master - Marketing'}
                        img={Robert}
                        description={['Mr. Freeman is a gifted leader and a talented\n' +
                        '                                       professional with over 20 years of combined experience in international business,\n' +
                        '                                       logistics, insurance, business development, risk management, construction,\n' +
                        '                                       international investments, immigration, and many more.', 'Mr. Freeman belongs to the type of people that Quote: Never had a chance to work for someone and having spent nearly 20 years in New York City never had a chance to ride a bus! \n']}/>
                    <AboutCard
                        nth={3}
                        name={'Ruslan Hairov'}
                        position={'Quality Control Manager'}
                        img={Ruslan}
                        description={['Ruslan joined IBS team back in 2020 and since Day 1 remains the key person ensuring the quality of set standards of production apply to all products made by Ibs Here Inc.']}
                    />
                </div>
            </div>
        </section>
    )
}

export default About