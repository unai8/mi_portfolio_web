import '../styles/Navbar.css'
import React from 'react'
import Sun from '../assets/selected_sun.svg'
import Moon from '../assets/moon.svg'

export default function Navbar() {

    return (
      <nav className='navMain'>
        <div className='navMainContainer'>
            <div className='navMainContainerElement'>
              <a>Experiencia</a>
            </div>
            <div className='navMainContainerElement'>
              <a style={{color:'#604696'}}>Proyectos</a>
            </div>
            <div className='navMainContainerElement'>
              <a>Sobre Mi</a>
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
  