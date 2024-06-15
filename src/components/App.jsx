import Navbar from './Navbar'
import Presentation from './Presentation'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'
import '../styles/App.css'
import { useState } from 'react'


export default function App() {
  const [isLight, setIsLight] = useState(true);

  return (
    <div className='Main' style={{backgroundColor: isLight ? '#FFFFFF' : '#1E1F22' }}>
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <Presentation isLight={isLight}/>
      <WorkExperience isLight={isLight}/>
      <Projects isLight={isLight}/>
      <AboutMe isLight={isLight}/>
      <Contact isLight={isLight}/>
    </div>
  )
}

