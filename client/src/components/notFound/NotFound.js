import React from 'react'
import './notFound.css'

const NotFound = () => {
    return (
        <div className='container'>
            <h1>Page Not Found</h1>
            <img src={require('../../assets/404.png').default} alt="Página Não Encontrada" />
        </div>
    )
}

export default NotFound
