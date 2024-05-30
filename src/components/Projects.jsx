
import '../styles/Projects.css'
import photo1 from '../assets/photo1.jpg'
import principal_logo from '../assets/principal_logo.svg'

export default function Projects() {


    return(
        <article className="ProjectsMain">
            <div className='ProjectsMainElementTitle'>
                    <p>Proyectos</p>
            </div>
            <div className='ProjectsMainElement'>
                <div className='ProjectsMainElementSubTitle'>
                    <p>WEB PAGE</p>
                    <div className='ProjectsMainElementSubTitleCase'>
                    </div>
                </div>
                <div className='ProjectsMainElementPhotoContainer'>
                    <div className='ProjectsMainElementPhotoSubContainer'>
                        <img className='ProjectsMainElementPhoto' src={photo1}></img>
                        <img className='ProjectsMainElementPhotoLogo' src={principal_logo}></img>
                    </div>
                </div>
                <div className='ProjectsMainElementDescription'>

                </div>
            </div>
        </article>
    )
}