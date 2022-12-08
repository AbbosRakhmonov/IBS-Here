import {useEffect, useState} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import {map, uniqueId} from 'lodash'
import useSticky from '../../CustomHooks/UseSticky'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {motion} from 'framer-motion'

const navLinks = [
    {
        name: 'Home',
        path: '#home'
    },
    {
        name: 'Projects',
        path: '#projects'
    },
    {
        name: 'Our Services',
        path: '#services'
    },
    {
        name: 'Investment Opportunities',
        path: '#investment'
    },
    {
        name: 'About Us',
        path: '#about'
    },
    {
        name: 'Contact Us',
        path: '#contact'
    }
]

function Navbar() {
    const [navbarHeight, setNavbarHeight] = useState(0)
    const {sticky, stickyRef} = useSticky()
    const [open, setOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('home')

    const initial = {
        y: -100
    }

    const animate = {
        y: 0
    }

    const transition = {
        type: 'spring',
        stiffness: 120
    }

    const throwSection = (id) => {
        const element = document.getElementById(id)
        const navbarHeight = stickyRef.current.clientHeight
        window.scrollTo({
            top: element.offsetTop - navbarHeight,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        if (open) {
            // html style overflow: hidden
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflowX = 'hidden'
            document.body.style.overflowY = 'auto'
        }
    }, [open])
    useEffect(() => {
        window.addEventListener('scroll', function () {
            const scrollDistance = window.scrollY
            document.querySelectorAll('section').forEach((el, i) => {
                if (el.offsetTop - document.querySelector('nav').clientHeight <= scrollDistance) {
                    setActiveLink(el.id)
                }
            })
        })

        return () => {

        }
    }, [])
    useEffect(() => {
        window.addEventListener('resize', () => {
            setNavbarHeight(stickyRef.current.clientHeight)
        })
        return setNavbarHeight(stickyRef.current.clientHeight)
    }, [stickyRef])
    return (
        <motion.nav
            initial={initial}
            animate={animate}
            transition={transition}
            className={`navigation-bar p-[1rem_0] ${sticky ? 'sticky top-0 z-[100] w-full bg-white-80 backdrop-blur-lg drop-shadow-md' : 'bg-white'}`}
            ref={stickyRef}>
            <div className="container mx-auto flex items-center justify-between lg:px-0 md:px-[2%]">
                <div
                    className="logo relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:w-[1px] after:bg-[#CECECE] after:-right-[2.5rem]">
                    <Link to={'/'} onClick={() => {
                        window.reload()
                    }} className={'font-bold font-raleway text-color-logo text-lg uppercase'}>ibs here
                        inc</Link>
                </div>
                <div
                    style={{top: `${navbarHeight - 1}px`}}
                    className={`navbar-collapse z-10 flex flex-col lg:h-auto lg:flex-row items-center lg:gap-[5rem] gap-8 lg:static absolute left-0 right-0 h-screen lg:bg-transparent lg:backdrop-blur-0 backdrop-blur-md bg-white-80 overflow-auto transition-all duration-300 ease-out lg:translate-y-0 ${open ? 'translate-y-0' : '-translate-y-[150%]'}`}>
                    <ul className={'list-none flex flex-col lg:p-0 pt-3.5 lg:flex-row lg:gap-[3rem] gap-[1rem] md:items-center'}>

                        {
                            map(navLinks, (link) =>
                                <li className={'text-center'} key={uniqueId('navlink_')}>
                                    <Link to={link.path}
                                          className={`font-semibold font-raleway text-base md:text-lg hover:text-text-active ${activeLink === link.path.split('#')[1].toLowerCase() ? 'text-text-active' : 'text-text-inactive'}`}
                                          onClick={
                                              () => {
                                                  setOpen(false)
                                                  throwSection(link.path.split('#')[1].toLowerCase())
                                              }
                                          }>{link.name}</Link>
                                </li>)
                        }
                    </ul>
                    <Link to={'#contact'}
                          onClick={() => {
                              setOpen(false)
                              throwSection('contact')
                          }}
                          className={'nav-button font-raleway font-semibold text-sm md:text-lg text-main-green hover:text-white hover:bg-button-green focus:text-white focus:bg-button-green active:scale-95'}>Get
                        a quote</Link>
                </div>
                {/*    burger button*/}
                <button className={'lg:hidden md:block'} onClick={() => {
                    setOpen(!open)
                }}>
                    {
                        open ? <AiOutlineClose className={'text-2xl text-black'}/> : <AiOutlineMenu
                            className={'text-2xl text-black'}/>
                    }
                </button>
            </div>
        </motion.nav>
    )
}

export default Navbar