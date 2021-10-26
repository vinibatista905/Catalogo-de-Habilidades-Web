import React from 'react'

import './About.css'

const About = () => {
    return (
        <div className='about-container'> 
            <div className="about-card">
                <img src={require('../../../assets/dev.png').default} className='card-icon' />
                <h4 className='card-title'>Desenvolvedores</h4>
                <p className='card-desc'>Insira as suas principais habilidades e experiências, e demonstre para o seu gestor que você é capacitado para novos desafios!</p>
                
            </div>

            <div className="about-card">
                <img src={require('../../../assets/manager.png').default} className='card-icon' />
                <h4 className='card-title'>Gestores</h4>
                <p className='card-desc'>Monte e gerencie a sua equipe conforme as habilidades de cada integrante.</p>
            </div>

            <div className="about-card">
                <img src={require('../../../assets/rh.png').default} className='card-icon' />
                <h4 className='card-title'>Recursos Humanos</h4>
                <p className='card-desc'>Acompanhe as habilidades dos colaboradores para planejar treinamentos ou cursos.</p>
            </div>
        </div>
    )
}

export default About
