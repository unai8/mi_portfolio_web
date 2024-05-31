import '../styles/AboutMe.css'
import AboutMePhoto from '../assets/UnaiAlfaro.jpg'
import Javascript from '../assets/javascript.svg'
import Python from '../assets/python.svg'
import NodeJS from '../assets/node_js.svg'
import MifrosoftNet from '../assets/microsoft_net.svg'
import ReactNative from '../assets/react_native.svg'


export default function AboutMe() {
    
    return(
        <section id='AboutMe' className='aboutMeMain'>
            <div className='aboutMeMainTitle'>
                <p>Sobre mí</p>
            </div>
            <div className='aboutMeMainTitlePhotoDescription'>
                <img src={AboutMePhoto}/>
                <p>Nam mi felis, congue vitae massa at, imperdiet facilisis sem. Suspendisse sagittis urna tristique elit ornare mollis. Maecenas ac ex vitae lacus viverra lacinia molestie commodo quam. <span className='underlineText'>Quisque aliquet, odio ut sollicitudin dictum, nibh mi tincidunt leo,</span> vitae blandit sem nisi eu nulla. Praesent ornare tempor enim, non vehicula sem auctor id. Mauris tincidunt purus at nulla posuere luctus. In lacus quam, semper egestas aliquam sit amet, finibus viverra quam.<br/><br/> Aenean vel auctor quam, tincidunt iaculis nisl. Suspendisse potenti. Curabitur sed lobortis nibh, eu venenatis ligula. Vivamus aliquet orci lacus, semper ornare mi interdum vel. Donec molestie nibh sed est ullamcorper, eget dignissim odio</p>
            </div>
            <div className='aboutMeMainTitleDescription'>
                <p>Nam mi felis, congue vitae massa at, imperdiet facilisis sem. Suspendisse sagittis urna tristique elit ornare mollis. Maecenas ac ex vitae lacus viverra lacinia molestie commodo quam. <span className='underlineText'>Quisque aliquet, odio ut sollicitudin dictum, nibh mi tincidunt leo,</span> vitae blandit sem nisi eu nulla. Praesent ornare tempor enim, non vehicula sem auctor id. Mauris tincidunt purus at nulla posuere luctus. In lacus quam, semper egestas aliquam sit amet, finibus viverra quam.</p>
            </div>
            <div className='aboutMeMainSkills'>
                <p>APTITUDES</p>
                <div className='aboutMeMainSkillsPhotoContainer'>
                    <img src={MifrosoftNet}/>
                    <img src={Python}/>
                    <img src={Javascript}/>
                    <img src={NodeJS}/>
                    <img src={ReactNative}/>
                </div>
            </div>
        </section>
    )
}