import Navbar from './Navbar'
import Presentation from './Presentation'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'
import '../styles/App.css'


export default function App() {

  return (
    <div className='Main'>
      <Navbar/>
      <Presentation/>
      <WorkExperience/>
      <Projects/>
      <AboutMe/>
      <Contact/>
    </div>
  )
}

