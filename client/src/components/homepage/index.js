import React from 'react'
import Header from './header/Header'
import Footer from '../footer/Footer'
import Hero from './hero/Hero'

import './Homepage.css'

const HomePage = () => {
    return (
        <div className='page-container'>
            <div className='section-1'>
            <Header />
            <Hero />
            </div>
            <div className='section-2'>
            <Header />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
