import principalLogo from '../assets/principal_logo.svg'
import '../styles/Presentation.css'
import mail from '../assets/mail.svg'
import linkedin from '../assets/linkedin.svg'
import phone from '../assets/phone.svg'


export default function Presentation() {

    return (
      <article className="presentationMain">
        <img className='presentationMainImage' src={principalLogo} />
        <div className='presentationMainText'>
            <p className='presentationMainTextTitle'>
                <span className='presentationMainTextLittleTitle'> 
                    Hey, soy
                </span>
                <span className='presentationMainTextBigTitle'>
                    Unai Alfaro
                </span>
            </p>
            <p>
                <span className='presentationMainTextSubTitle'>Desarrollador y programador</span>
            </p>
            <p> 
                <span className='presentationMainTextMoreText'>Me <span className='presentationMainTextMoreTextPurple'>apasiona</span> el <span className='presentationMainTextMoreTextPurple'>desarrollo de software IoT</span>. Soy una persona <span className='presentationMainTextMoreTextPurple'>empática</span> y <span className='presentationMainTextMoreTextPurple'>proactiva</span>, que trabaja muy bien en equipo. Me destaco por mi habilidad para <span className='presentationMainTextMoreTextPurple'>optimizar el tiempo</span>, <span className='presentationMainTextMoreTextPurple'>adaptarme</span> fácilmente a diferentes situaciones y aportar <span className='presentationMainTextMoreTextPurple'>ideas innovadoras.</span>
 He tenido la suerte de trabajar en <span className='presentationMainTextMoreTextPurple'>proyectos retadores</span> que me han permitido <span className='presentationMainTextMoreTextPurple'>crecer profesionalmente</span> en empresas como <span className='presentationMainTextMoreTextPurple'>Michelin</span>, <span className='presentationMainTextMoreTextPurple'>Ingecom Sistemas</span> y recientemente en <span className='presentationMainTextMoreTextPurple'>Satec</span> como <span className='presentationMainTextMoreTextPurple'>CiberSOC</span>. Además, he complementado mi formación con estudios en <span className='presentationMainTextMoreTextPurple'>ciberseguridad</span>, <span className='presentationMainTextMoreTextPurple'>desarrollo web</span> y de <span className='presentationMainTextMoreTextPurple'>aplicaciones multiplataforma.</span>
 Me emociona seguir explorando nuevas oportunidades donde pueda aplicar mis <span className='presentationMainTextMoreTextPurple'>conocimientos</span> y <span className='presentationMainTextMoreTextPurple'>seguir aprendiendo</span>. Estoy listo para afrontar <span className='presentationMainTextMoreTextPurple'>nuevos retos</span> y aportar <span className='presentationMainTextMoreTextPurple'>mi experiencia</span> en este mundo del desarrollo de software y la ciberseguridad.</span>
<span className='presentationMainTextMoreTextPurple'></span>
            </p>
        </div>
        <div className='presentationMainButtons'>
            <a className='presentationMainButton' href='mailto:aunai888@gmail.com'>
                <img className='presentationMainButtonIcon' src={mail}/>
                <span>Contáctame</span>
            </a>
            <a className='presentationMainButton' href='https://www.linkedin.com/in/unai-alfaro-garcía' target="_blank">
                <img className='presentationMainButtonIcon' src={linkedin}/>
                <span>Linkedin</span>
            </a>
            <a className='presentationMainButton' href='tel:688843432'>
                <img className='presentationMainButtonIcon' src={phone}/>
                <span>Teléfono</span>
            </a>
        </div>
      </article>
    )
  }