import '../styles/Navbar.css'
import React from 'react'
import LightSun from '../assets/sun_light.svg'
import SelectedSun from '../assets/sun_selected.svg'
import DarkMoon from '../assets/moon_dark.svg'
import SelectedMoon from '../assets/moon_selected.svg'

export default function Navbar({ isLight, setIsLight }) {

  const changeToLightMode = () => {
    if(!isLight){
      setIsLight(true)
    }
  }

  const changeToDarkMode = () => {
    if(isLight){
      setIsLight(false)
    }
  }

  return (
    <nav className='navMain'>
      <div className='navMainContainer'>
        <div className='navMainContainerElement'>
          <a style={{color: isLight ? '#2C2E35' : '#FFFFFF'}} href='#WorkExperience'>Experiencia</a>
        </div>
        <div className='navMainContainerElement'>
          <a style={{color: isLight ? '#2C2E35' : '#FFFFFF'}} href='#Projects'>Proyectos</a>
        </div>
        <div className='navMainContainerElement'>
          <a style={{color: isLight ? '#2C2E35' : '#FFFFFF'}} href='#AboutMe'>Sobre Mi</a>
        </div>
        <div className='navMainContainerElement'>
          <a style={{color: isLight ? '#2C2E35' : '#FFFFFF'}} href='#Contact'>Contacto</a>
        </div>
        <div className='navMainContainerIcons'>
          <img className='LigthIcons' src={isLight ? SelectedSun : LightSun} alt="Light Mode" onClick={changeToLightMode}/>
          <img className='LigthIcons' src={isLight ? DarkMoon : SelectedMoon} alt="Dark Mode" onClick={changeToDarkMode}/>
        </div>
      </div>
    </nav>
  )
}
