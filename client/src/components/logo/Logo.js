import React from 'react'
import { IoLogoOctocat } from 'react-icons/io'
import './Logo.css'

const Logo = () => {
    return (
        <div className='logo'>
            <h1 className='logo-name'>Skills Cat</h1>
            <IoLogoOctocat className='logo-icon' />
        </div>
    )
}

export default Logo
