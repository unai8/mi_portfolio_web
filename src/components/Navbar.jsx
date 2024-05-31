import '../styles/Navbar.css'
import React from 'react'
import Sun from '../assets/SOL.svg'
import Moon from '../assets/LUNA.svg'

export default function Navbar() {

    return (
      <nav className='navMain'>
        <div className='navMainContainer'>
            <div className='navMainContainerElement'>
              <a href='#WorkExperience'>Experiencia</a>
            </div>
            <div className='navMainContainerElement'>
              <a href='#Projects'>Proyectos</a>
            </div>
            <div className='navMainContainerElement'>
              <a href='#AboutMe'>Sobre Mi</a>
            </div>
            <div className='navMainContainerElement'>
              <a>Contacto</a>
            </div>
            <div className='navMainContainerIcons'>
                <img className='LigthIcons' src={Sun}/>
                <img className='LigthIcons' src={Moon}/>
            </div>
        </div>
      </nav>
    )
  }
  