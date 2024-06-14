import '../styles/Contact.css'
import SecondaryLogo from '../assets/secondary_logo.svg'

export default function Contact() {

    return(
        <section id='Contact' className='ContactMain'>
            <p className='ContactMainTitle'>Contacto</p>
            <div className='ContactMainElements'>
                <div className='ContactMainElementsLogo'>
                    <img src={SecondaryLogo}/>
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