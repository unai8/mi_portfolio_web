
import '../styles/Projects.css'
import photo1 from '../assets/portfolio.jpg'
import principal_logo from '../assets/principal_logo.svg'

export default function Projects() {


    return(
        <article id='Projects' className="ProjectsMain">
            <div className='ProjectsMainElementTitle'>
                <p>Proyectos</p>
            </div>
            <div className='ProjectsMainElement'>
                <div className='ProjectsMainElementSubTitle'>
                    <p>Portfolio Web</p>
                    <div className='ProjectsMainElementSubTitleCase'>
                    </div>
                </div>
                <div className='ProjectsMainElementPhotoContainer'>
                    <img className='ProjectsMainElementPhoto' src={photo1}></img>
                    <img className='ProjectsMainElementPhotoLogo' src={principal_logo}></img>
                </div>
                <div className='ProjectsMainElementDescription'>
                    <p className='ProjectsMainElementDescriptionTitle'>Descripción:</p>
                    <span>Este proyecto es mi <span className='ProjectsMainElementDescriptionPurple'>portafolio personal</span>, una página web diseñada y desarrollada con React.js. La página tiene como objetivo presentar mis <span className='ProjectsMainElementDescriptionPurple'>estudios</span>, <span className='ProjectsMainElementDescriptionPurple'>habilidades</span> y <span className='ProjectsMainElementDescriptionPurple'>experiencia laboral</span> de manera profesional y accesible para aumentar mi alcance.</span>
                    <p className='ProjectsMainElementDescriptionTitle'>Características:</p>
                    <span>
                        -<span className='ProjectsMainElementDescriptionPurple'>Modo Claro y Modo Oscuro: </span>La página web incluye la funcionalidad de cambiar entre un tema claro y un tema oscuro para mejorar la experiencia del usuario y adaptarse a sus preferencias.<br/>
                        -<span className='ProjectsMainElementDescriptionPurple'>Desarrollo Frontend: </span>El diseño está implementado utilizando HTML y CSS, junto con la lógica de JavaScript proporcionada por React.js.<br/>
                        -<span className='ProjectsMainElementDescriptionPurple'>Responsive Design: </span>La página es totalmente responsiva, asegurando que se vea y funcione bien en dispositivos de diferentes tamaños, desde móviles hasta computadoras de escritorio.
                    </span>
                    <p className='ProjectsMainElementDescriptionTitle'>Tecnologías Utilizadas</p>
                    <span clas>
                        -<span className='ProjectsMainElementDescriptionPurple'>React.JS</span><br/>
                        -<span className='ProjectsMainElementDescriptionPurple'>HTML</span><br/>
                        -<span className='ProjectsMainElementDescriptionPurple'>CSS</span><br/>
                        -<span className='ProjectsMainElementDescriptionPurple'>Javascript</span><br/>
                    </span>
                </div>
                <span className='ProjectsMainElementDescriptionLine'></span>
            </div>
        </article>
    )
}