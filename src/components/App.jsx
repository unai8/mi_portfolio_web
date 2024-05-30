import Navbar from './Navbar'
import Presentation from './Presentation'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import '../styles/App.css'


export default function App() {

  return (
    <div style={{padding: '0 5% 0 5%'}}>
      <Navbar/>
      <Presentation/>
      <WorkExperience/>
      <Projects/>
    </div>
  )
}

