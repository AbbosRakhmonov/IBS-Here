import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Projects from './Pages/Projects/Projects'
import Services from './Pages/Services/Services'
import Invests from './Pages/Invests/Invests'
import About from './Pages/About/About'
import React from 'react'
import Contact from './Pages/Contact/Contact'

function App() {
    return (
        <section id={'home'} className="app">
            <Navbar/>
            <Header/>
            <div className={'sm:mt-[8.75rem] mt-[3rem]'}>
                <Projects/>
            </div>
            <div className={'sm:mt-[8.75rem] mt-[3rem]'}>
                <Services/>
            </div>
            <div className={'sm:mt-[8.75rem] mt-[3rem]'}>
                <Invests/>
            </div>
            <div className={'sm:mt-[8.75rem] mt-[3rem]'}>
                <About/>
            </div>
            <div className={'map'}>
                <iframe
                    title={'map'}
                    width={'100%'}
                    height={'400px'}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.439373961339!2d-88.24089078514245!3d41.90491257171594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efe02f5289ecb%3A0xc75b4bb18b013a92!2s1280%20Powis%20Rd%2C%20West%20Chicago%2C%20IL%2060185%2C%20USA!5e0!3m2!1sen!2s!4v1669154398714!5m2!1sen!2s"
                    style={{border: 'none'}} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={'sm:mt-[8.75rem] mt-[3rem] mb-[5rem] md:mb-[10.3125rem]'}>
                <Contact/>
            </div>
            <footer className={'w-full py-[2.5rem] bg-footer-bg'}>
                <div className="container mx-auto text-center">
                    <p className={'font-raleway font-medium text-white text-lg'}>© 2022 IBS HERE INC, All Rights
                        Reserved</p>
                </div>
            </footer>
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
        </section>
    )
}

export default App
