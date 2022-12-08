import React, {useState} from 'react'
import Phone from '../../Images/phone.svg'
import Mail from '../../Images/mail.svg'
import Location from '../../Images/location.svg'
import Input from '../../Components/Input'
import Sms from '../../Images/sms.svg'
import TextArea from '../../Components/TextArea'
import Telegram from '../../Images/telegram.svg'
import {send} from 'emailjs-com'
import Alert from '../../Components/Alert'
import {motion} from 'framer-motion'


function Contact() {
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault()
        const fullName = e.target.fullName.value
        const email = e.target.email.value
        const message = e.target.message.value
        const phone = e.target.phone.value
        const templateParams = {
            from_name: fullName,
            from_email: email,
            phone: phone,
            message: message
        }
        if (fullName && email && message && phone) {
            setIsFilled(true)
            try {
                setLoading(true)
                await send('service_1hfy5dk', 'template_w6l55a7', templateParams, 'user_DjmP6jLlOw5XqLVovNkVM').finally(
                    () => {
                        setLoading(false)
                        e.target.fullName.value = ''
                        e.target.email.value = ''
                        e.target.message.value = ''
                        e.target.phone.value = ''
                    }
                )
                setIsSuccess(true)
                setIsError(false)
                setTimeout(() => {
                    setIsSuccess(false)
                }, 2000)
            } catch (e) {
                console.log(e)
                setIsError(true)
                setIsSuccess(false)
                setTimeout(() => {
                    setIsError(false)
                }, 2000)
            }
        } else {
            setIsFilled(false)
            setIsError(true)
            setIsSuccess(false)
            setTimeout(() => {
                setIsError(false)
            }, 2000)
        }

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
        <section id={'contact'}>
            {
                !loading && (isError || isSuccess) &&
                <Alert isError={isError} message={!isFilled && 'Please fill all fields'}/>
            }
            <div className="container mx-auto md:px-[2%] overflow-x-hidden">
                <div className="flex flex-col gap-[5rem] md:flex-row md:items-end md:gap-[1rem]">
                    <motion.div
                        initial={initial}
                        whileInView={whileInView}
                        viewport={{once: true, threshold: 0.5}}
                        transition={transition}
                        className="lg:flex-1 md:w-[55%] flex-col md:flex-row flex md:flex-col gap-[3.125rem]">
                        <div className={'flex flex-col gap-[2.25rem]'}>
                            <h4 className={'font-raleway font-bold md:text-left text-center text-3xl lg:text-[2.75rem] md:text-4xl'}>Get
                                in touch with us</h4>
                            <p className={'md:text-md md:text-left text-center text-base font-open-sans text-text-inactive md:pr-12 md:pr-[30%]'}>
                                Now Ibs Here! Meeting our team is possible at one of our locations: Staten Island (New
                                York), Wilder (Kentucky) or West Chicago (Illinois) or virtually online!
                            </p>
                        </div>
                        <ul className={'list-none flex md:flex-nowrap md:justify-start justify-evenly flex-wrap md:flex-col gap-[1.75rem]'}>
                            <li>
                                <p className={'mb-[0.75rem] flex items-center sm:justify-start justify-center gap-[1rem]'}>
                                    <img src={Phone} width={'24px'} height={'24px'} alt={'phone'}/>
                                    <span className={'font-raleway font-semibold text-text-inactive text-lg'}>Phone number</span>
                                </p>
                                <a href="tel:716400-0082"
                                   className={'no-underline text-black font-raleway font-bold text-[1.75rem]'}>(716)
                                    400-0082</a>
                            </li>
                            <li>
                                <p className={'mb-[0.75rem] flex sm:justify-start justify-center items-center gap-[1rem]'}>
                                    <img src={Mail} width={'24px'} height={'24px'} alt={'mail'}/>
                                    <span
                                        className={'font-raleway font-semibold text-text-inactive text-lg'}>Email</span>
                                </p>
                                <a href="mailto:robert@ibshere.com"
                                   className={'no-underline text-black font-raleway font-semibold text-lg'}>robert@ibshere.com</a>
                            </li>
                            <li className={'sm:text-left text-center'}>
                                <p className={'mb-[0.75rem] sm:justify-start justify-center flex items-center gap-[1rem]'}>
                                    <img src={Location} width={'24px'} height={'24px'} alt={'location'}/>
                                    <span
                                        className={'font-raleway font-semibold text-text-inactive text-lg'}>Address</span>
                                </p>
                                <span
                                    className={'no-underline text-black font-raleway font-semibold md:text-md text-lg'}>
                                    HQ - 611 Midland Avenue, Staten Island, NY 10306 <br/>
                                    Regional - 1280 Powis Road, West Chicago, IL 60185 <br/>
				                    Regional - 100 Beacon Drive, Wilder, KY 41076
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, threshold: 0.5}}
                        transition={transition}
                        className="lg:flex-1 md:w-[45%] sm:w-[80%] md:mx-0 sm:mx-auto">
                        <div className={'flex items-center md:justify-start justify-center gap-[0.75rem] mb-[3.75rem]'}>
                            <span><img src={Sms} alt="sms" width={'34px'} height={'34px'}/></span>
                            <h3 className={'font-raleway font-bold text-[1.375rem]'}>Send us message</h3>
                        </div>
                        <form className={'flex flex-col items-start gap-[2.25rem]'} id={'my-form'} onSubmit={onSubmit}>
                            <Input name={'fullName'} type={'text'} label={'Full name'}/>
                            <Input name={'phone'} type={'tel'} label={'Phone'}/>
                            <Input name={'email'} type={'text'} label={'Email'}/>
                            <TextArea name={'message'} label={'Message'}/>
                            <button disabled={loading}
                                    className={'flex md:mx-0 mx-auto p-[1rem_1.5rem] text-white hover:bg-main-green active:scale-95 items-center gap-[0.75rem] border-none bg-button-green rounded-[4px] disabled:opacity-75 disabled:cursor-not-allowed'}>
                                <img src={Telegram} width={'16px'} height={'16px'} alt="telegram"/>
                                <span>Send message</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact