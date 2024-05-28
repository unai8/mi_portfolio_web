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
                <span className='presentationMainTextMoreText'>Nam mi felis, congue vitae massa at, imperdiet facilisis sem. Suspendisse sagittis urna tristique elit ornare mollis. Maecenas ac ex vitae lacus viverra lacinia molestie commodo quam. Quisque aliquet, odio ut sollicitudin dictum, nibh mi tincidunt leo, vitae blandit sem nisi eu nulla. Praesent ornare tempor enim, non vehicula sem auctor id. Mauris tincidunt purus at nulla posuere luctus. In lacus quam, semper egestas aliquam sit amet, finibus viverra quam. Aenean vel auctor quam, tincidunt iaculis nisl. <span className='presentationMainTextMoreTextPurple'>Suspendisse potenti.</span> Curabitur sed lobortis nibh, eu venenatis ligula. Vivamus aliquet orci lacus, semper ornare mi interdum vel. Donec molestie nibh sed est ullamcorper, eget dignissim odio venenatis. Integer at ligula non lorem pharetra lobortis quis sed tortor. Nullam sit amet tellus consectetur, mattis risus sed, maximus leo. Vestibulum scelerisque tortor quis vehicula gravida.</span>
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