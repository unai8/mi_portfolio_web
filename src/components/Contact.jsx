import '../styles/Contact.css'
import DarkSecondaryLogo from '../assets/secondary_logo_dark.svg'
import LightSecondaryLogo from '../assets/secondary_logo_light.svg'

export default function Contact({isLight}) {

    return(
        <section id='Contact' className='ContactMain'>
            <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='ContactMainTitle'>Contacto</p>
            <div className='ContactMainElements'>
                <div className='ContactMainElementsLogo'>
                    <img src={isLight ? DarkSecondaryLogo : LightSecondaryLogo}/>
                </div>
                <div className='ContactMainElementsButtoms'>
                    <div className='ContactMainElementsButtomsElement'>
                        <a href='mailto:aunai888@gmail.com'>aunai888@gmail.com</a>
                    </div>
                    <div className='ContactMainElementsButtomsElement'>
                        <a href='tel:688843432'>+34 688 84 34 32</a>
                    </div>
                </div>
            </div>
        </section>
    )
}