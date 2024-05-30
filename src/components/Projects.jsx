
import '../styles/Projects.css'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import principal_logo from '../assets/principal_logo.svg'

export default function Projects() {


    return(
        <article id='Projects' className="ProjectsMain">
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
                    <img className='ProjectsMainElementPhoto' src={photo1}></img>
                    <img className='ProjectsMainElementPhotoLogo' src={principal_logo}></img>
                </div>
                <div className='ProjectsMainElementDescription'>
                    <p>Nam mi felis, congue vitae massa at, imperdiet facilisis sem. Suspendisse sagittis urna tristique elit ornare mollis. <span className='ProjectsMainElementDescriptionLine'>Maecenas ac ex vitae lacus viverra lacinia molestie commodo quam.</span> Quisque aliquet, odio ut sollicitudin dictum, nibh mi tincidunt leo, vitae blandit sem nisi eu nulla. Praesent ornare tempor enim, non vehicula sem auctor id. Mauris tincidunt purus at nulla posuere luctus. In lacus quam, semper egestas aliquam sit amet, finibus viverra quam. Aenean vel auctor quam, tincidunt iaculis nisl. Suspendisse potenti. Curabitur sed lobortis nibh, eu venenatis ligula. Vivamus aliquet orci lacus, semper ornare mi interdum vel. Donec molestie nibh sed est ullamcorper, eget dignissim odio venenatis. Integer at ligula non lorem pharetra lobortis quis sed tortor. Nullam sit amet tellus consectetur, mattis risus sed, maximus leo. Vestibulum scelerisque tortor quis vehicula gravida.</p>
                </div>
            </div>
            <div className='ProjectsMainElement'>
                <div className='ProjectsMainElementSubTitle'>
                    <p>DESARROLLO DE CÓDIGO JAVA</p>
                    <div className='ProjectsMainElementSubTitleCase'>
                    </div>
                </div>
                <div className='ProjectsMainElementPhotoContainer'>
                    <img className='ProjectsMainElementPhoto' src={photo2}></img>
                    <img className='ProjectsMainElementPhotoLogo' src={principal_logo}></img>
                </div>
                <div className='ProjectsMainElementDescription'>
                    <p>Nam mi felis, congue vitae massa at, imperdiet facilisis sem. Suspendisse sagittis urna tristique elit ornare mollis. <span className='ProjectsMainElementDescriptionLine'>Maecenas ac ex vitae lacus viverra lacinia molestie commodo quam.</span> Quisque aliquet, odio ut sollicitudin dictum, nibh mi tincidunt leo, vitae blandit sem nisi eu nulla. Praesent ornare tempor enim, non vehicula sem auctor id. Mauris tincidunt purus at nulla posuere luctus. In lacus quam, semper egestas aliquam sit amet, finibus viverra quam. Aenean vel auctor quam, tincidunt iaculis nisl. Suspendisse potenti. Curabitur sed lobortis nibh, eu venenatis ligula. Vivamus aliquet orci lacus, semper ornare mi interdum vel. Donec molestie nibh sed est ullamcorper, eget dignissim odio venenatis. Integer at ligula non lorem pharetra lobortis quis sed tortor. Nullam sit amet tellus consectetur, mattis risus sed, maximus leo. Vestibulum scelerisque tortor quis vehicula gravida.</p>
                </div>
            </div>
        </article>
    )
}