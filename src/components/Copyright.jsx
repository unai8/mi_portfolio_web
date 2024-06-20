import '../styles/Copyright.css'

export default function Copyright({isLight}) {

    return(
        <div className="CopyrightMain">
            <p style={{color: isLight ? '#2C2E35' : '#FFFFFF'}}>© 2024 UnaiAlfaro.com. Todos los derechos reservados.</p>
        </div>
    )
}