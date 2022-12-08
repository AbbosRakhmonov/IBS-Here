import React, {useState} from 'react'
import Constructions from './Constructions'
import {uniqueId} from 'lodash'
import All from './All'
import Card1 from '../../Images/card-1.svg'
import Card2 from '../../Images/card-2.svg'
import Card3 from '../../Images/card-3.svg'
import Card4 from '../../Images/card-4.svg'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import {motion} from 'framer-motion'

const services = [
    {
        title: 'International Investors & Visas',
        descriptions: [
            'Ibs Here Inc may become your trusted partner for various investment, acquisition and development projects of residential and commercial nature that may include hotel and resort networks, food-food chains, gas-stations, truck-stops and other ventures.',
            'Ibs Here Inc has a reliable Legal team that offers visa support and various immigration benefits including Green Cards for individuals investing over $100,000 USD into the American economy.'
        ]
    },
    {
        title: 'Manufacturing & Distribution',
        descriptions: [
            'Our management team has vast experience in manufacturing, production, warehousing and distribution operations.',
            'If you have business plans to produce, manufacture or build something (no matter whether you’re currently located in the U.S. or abroad) and you need help starting it - Ibs Here Inc may become your trusted partner in your new business venture !'
        ]
    },
    {
        title: 'Import & Export',
        descriptions: [
            'Whether you want to bring your product to the United States for further sale or distribution or you want to export your product out of the United States to another country - contact our Expert Team for assistance.',
            'Our Logistics Coordinators work with a number of exporters in the United States and is a \n' +
            'trusted Partner to deliver goods across the Atlantic and Pacific oceans.'
        ]
    }
]
const cards = [
    {
        title: <span>Construction &<br/>Development</span>,
        img: Card1
    },
    {
        title: <span>Manufacturing &<br/>Distribution</span>,
        img: Card2
    },
    {
        title: <span>International<br/>Investors & Visas</span>,
        img: Card3
    },
    {
        title: <span>Import &<br/>Export</span>,
        img: Card4
    }
]

function Services() {
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
    const [activeService, setActiveService] = useState(1)
    const changeActiveService = (id) => {
        setActiveService(id)
    }
    return (
        <section id={'services'}>
            <motion.h1
                initial={initial}
                whileInView={whileInView}
                viewport={{once: true, threshold: 0.5}}
                transition={transition}
                className={'font-raleway section-title mb-[3rem] sm:mb-[4.6rem] text-center'}>Our Services
            </motion.h1>
            <div className="flex linear-grad md:flex-row flex-col-reverse">
                <div className="flex-1 bg-color-black p-[7%_5%] md:p-[2%] md:py-[7%] flex items-center justify-end">
                    {
                        activeService === 1 ? <Constructions/> :
                            <All key={uniqueId('all_')} title={services[activeService - 2].title}
                                 descriptions={services[activeService - 2].descriptions}/>
                    }
                </div>
                <div className="flex-1 lg:p-[5%] flex items-center xl:justify-start md:justify-center md:mb-0 mb-[5%]">
                    <div className={'flex sm:flex-row flex-col md:flex-grow-0 flex-grow md:gap-[2.2rem]'}>
                        <div className={'flex md:flex-col md:flex-grow-0 flex-grow md:gap-[2.2rem] lg:mt-[3.5rem]'}>
                            <ServiceCard onCardClick={changeActiveService} title={cards[0].title}
                                         active={activeService === 1}
                                         nth={1} img={Card1}/>
                            <ServiceCard onCardClick={changeActiveService} title={cards[1].title}
                                         active={activeService === 3}
                                         nth={3} img={Card2}/>
                        </div>
                        <div className={'flex md:flex-col md:flex-grow-0 flex-grow md:gap-[2.2rem]'}>
                            <ServiceCard onCardClick={changeActiveService} title={cards[2].title}
                                         active={activeService === 2}
                                         nth={2} img={Card3}/>
                            <ServiceCard onCardClick={changeActiveService} title={cards[3].title}
                                         active={activeService === 4}
                                         nth={4} img={Card4}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services