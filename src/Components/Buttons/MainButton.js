import {motion} from 'framer-motion'

function MainButton({onclick, text = 'See our services'}) {
    const initial = {
        scale: 0,
        opacity: 0
    }
    const whileInView = {
        scale: 1,
        opacity: 1
    }
    return (
        <motion.button
            initial={initial}
            whileInView={whileInView}
            viewport={{once: true, threshold: 0.5}}
            className={'border-none p-[1rem_1.25rem] text-[0.75rem] 2xl:text-base sm:text-sm md:text-[1rem] bg-button-green text-white rounded-[4px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:bg-main-green'}
            onClick={onclick}>{text}</motion.button>
    )
}

export default MainButton