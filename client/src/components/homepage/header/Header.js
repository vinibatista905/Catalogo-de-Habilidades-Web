import React from 'react'
import { IoLogoOctocat } from 'react-icons/io'


import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
            <h1 className='header-logo-name'>Skills Cat</h1>
            <IoLogoOctocat className='header-logo-icon' />
        </div>

        <div className='header-nav'>
        <a className='header-link' href='/'>Home</a>
        <a className='header-link' href='/'>Sobre</a>
        
        <a href="/login"><button className='header-btn'>Login</button></a>
            </div>
        </div>
    )
}

export default Header
