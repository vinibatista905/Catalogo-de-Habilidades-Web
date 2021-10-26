import React from 'react'
import Header from './header/Header'
import Footer from '../footer/Footer'

import './Homepage.css'

const HomePage = () => {
    return (
        <div className='page-container'>
            <div className='section-1'>
            <Header />
            </div>
            <div className='section-2'>
            <Header />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
