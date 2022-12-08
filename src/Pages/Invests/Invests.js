import React from 'react'
import {map, uniqueId} from 'lodash'
import InvestCard from '../../Components/InvestCard/InvestCard'
import {motion} from 'framer-motion'

const investments = [
    {
        title: 'The Shell Fast-Food',
        price: '100,000'
    },
    {
        title: 'North Chicago Project',
        price: '3,000,000'
    },
    {
        title: 'Rockford Project',
        price: '2,500,000'
    },
    {
        title: 'St Louis Project',
        price: '500,000'
    },
    {
        title: 'Belmont Project',
        price: '2,000,000'
    },
    {
        title: 'Park Forest House',
        price: '500,000'
    },
    {
        title: 'Country Club House',
        price: '700,000'
    },
    {
        title: 'The Shell Resort',
        price: '1,500,000'
    }
]

function Invests() {
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
        <section id={'investment'}>
            <div className="container text-center mx-auto">
                <motion.h1
                    initial={initial}
                    whileInView={whileInView}
                    viewport={{once: true, threshold: 0.5}}
                    transition={transition}
                    className={'font-raleway section-title text-center'}>Investment Opportunities</motion.h1>
                <motion.p
                    initial={initial}
                    whileInView={whileInView}
                    viewport={{once: true, threshold: 0.5}}
                    transition={{...transition, delay: 0.1}}
                    className={'font-open-sans w-full md:text-md md:w-[80%] section-text mt-[2.5rem] mb-[3.75rem] lg:w-[50%] mx-auto'}>Ibs Here Inc offers various business and
                    investment opportunities in the United States. If you’re interested in growing your real estate
                    portfolio or invest into a business development project - consider the opportunities listed below.
                </motion.p>
                <div className={'flex flex-col sm:flex-row sm:flex-wrap gap-[1%] justify-center gap-y-[3.75rem]'}>
                    {
                        map(investments, (item,index) => <InvestCard key={uniqueId('invest_')} nth={index+1} title={item.title}
                                                               price={item.price}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Invests