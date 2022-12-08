import React, {useState} from 'react'
import SubMenu from '../../Components/SubMenu/SubMenu'
import Project from '../../Components/Projects/Project'
import {motion} from 'framer-motion'
import Shell_1 from '../../Images/shell-1.jpg'
import Shell_2 from '../../Images/shell-2.jpg'
import Shell_3 from '../../Images/shell-3.jpg'
import Shell_4 from '../../Images/shell-4.jpg'
import Shell_5 from '../../Images/shell-5.jpg'
import Hydrolift_1 from '../../Images/hydrolift-1.jpg'
import Hydrolift_2 from '../../Images/hydrolift-2.jpg'
import Hydrolift_3 from '../../Images/hydrolift-3.jpg'
import Hydrolift_4 from '../../Images/hydrolift-4.jpg'
import Hydrolift_5 from '../../Images/hydrolift-5.jpg'
import Cyber_1 from '../../Images/cyber-1.jpg'
import Cyber_2 from '../../Images/cyber-2.jpg'
import Cyber_3 from '../../Images/cyber-3.jpg'
import Cyber_4 from '../../Images/cyber-4.jpg'
import Cyber_5 from '../../Images/cyber-5.jpg'

const subNews = [
    {
        texts: [
            'Hydrolift is an innovative approach to water entertainment that allows you to experience the thrill of a powered water stream using special equipment.',
            'Now Hydrolift is available to Water Parks which makes this “thrill-entertainment” locally available virtually anywhere in the United States, Canada and Mexico!'
        ],
        buttonText: 'Become a Hydrolift Operator today!',
        images: [
            Hydrolift_1,
            Hydrolift_2,
            Hydrolift_3,
            Hydrolift_4,
            Hydrolift_5
        ]
    },
    {
        texts: ['Shell Modules offer cost effective and energy efficient solutions for residential and commercial construction. Shell Modules offer protective, water-resistant, sound-proof and solid structures that can be delivered anywhere in the U.S., Canada and Mexico.'],
        buttonText: 'Start your project with Shell Modules today!',
        images: [
            Shell_1,
            Shell_2,
            Shell_3,
            Shell_4,
            Shell_5
        ]
    },
    {
        texts: [
            'Innovative approach to public communication and mass-media solution! Available for quick installation and virtually anywhere throughout the U.S. and Canada',
            'Sign up with Accelerator Co to join Cybereye Media Project and become our Media Partner today! Available to truck driver schools and logistics-related companies in designated areas only.'
        ],
        buttonText: 'Become Media Partner today!',
        images: [
            Cyber_1,
            Cyber_2,
            Cyber_3,
            Cyber_4,
            Cyber_5
        ]
    }
]

function Projects() {
    const [activeSubMenu, setActiveSubMenu] = useState(1)
    const changeActiveSubMenu = (nth) => {
        setActiveSubMenu(nth)
    }

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
        <section id={'projects'}>
            <div className={'container mx-auto md:px-[5%]'}>
                <motion.h1
                    initial={initial}
                    whileInView={whileInView}
                    viewport={{once: true, threshold: 0.5}}
                    transition={transition}
                    className={'font-raleway section-title mb-[3rem] sm:mb-[4.6rem] text-center'}>Current Projects
                </motion.h1>
                <ul className={'sub-menu list-none flex xl:gap-[18rem] xl:justify-start justify-between'}>
                    <SubMenu title={'Hydrolift'} active={activeSubMenu === 1} nth={1} onClick={changeActiveSubMenu}/>
                    <SubMenu title={'The Shell Modules'} active={activeSubMenu === 2} nth={2}
                             onClick={changeActiveSubMenu}/>
                    <SubMenu title={'Cybereye Stations'} active={activeSubMenu === 3} nth={3}
                             onClick={changeActiveSubMenu}/>
                </ul>
                <motion.div
                    initial={{width: 0, opacity: 0}}
                    whileInView={{width: '100%', opacity: 1}}
                    viewport={{once: true, threshold: 0.5}}
                    transition={{duration: 1, ease: 'linear'}}
                    className={'sub-line w-full bg-color-line h-[2px] mb-[2rem] sm:mb-[3.75rem]'}></motion.div>
                <Project images={subNews[activeSubMenu - 1].images} videos={subNews[activeSubMenu - 1].videos}
                         buttonText={subNews[activeSubMenu - 1].buttonText}
                         texts={subNews[activeSubMenu - 1].texts}/>
            </div>
        </section>
    )
}

export default Projects