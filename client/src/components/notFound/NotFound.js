import React from 'react'
import './notFound.css'

const NotFound = () => {
    return (
        <div className='container'>
            <h1 className='NF-title'>Page Not Found</h1>
            <img className='NF-img' src={require('../../assets/404.png').default} alt="Página Não Encontrada" />
        </div>
    )
}

export default NotFound
