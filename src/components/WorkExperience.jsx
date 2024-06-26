
import '../styles/WorkExperience.css'


export default function WorkExperience({isLight}) {

    return (
      <article id='WorkExperience' className="WorkExperienceMain">
        <div style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTitle'>
            <p>Experiencia Laboral</p>
        </div>
        <div style={{borderLeftColor: isLight ? '#444AA7' : '#FFFFFF'}} className='WorkExperienceMainTimeline'>
            <div className='WorkExperienceMainTimelineElement'>
                <p className='WorkExperienceMainTimelineElementFirstTitle'>CiberSOC</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementSecondTitle'>Satec · Contrato de prácticas</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementThirdTitle'>abr. 2024 - may. 2024 · 2 meses</p>
                <p className='WorkExperienceMainTimelineElementFourthTitle'>Parque tecnológico Zamudio · Presencial</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementDescription'>-Revisión y Análisis de Logs: Monitoreo y análisis continuo de los logs de seguridad para identificar posibles amenazas y actividades sospechosas.
 <br/> -Implementación de Reglas de Seguridad: Configuración y ajuste de reglas en sistemas de detección y prevención de intrusiones (IDS/IPS) para proteger la infraestructura de TI.
 <br/> -Gestión de Falsos Positivos: Evaluación y manejo de falsas alarmas para mejorar la precisión de las alertas y optimizar los sistemas de detección.
 <br/> -Respuesta a Incidentes de Seguridad: Participación activa en la investigación y resolución de incidentes de seguridad, asegurando una respuesta rápida y efectiva.
 <br/> -Generación de Informes de Seguridad: Elaboración de informes detallados sobre eventos de seguridad y recomendaciones para mejorar la postura de seguridad de la empresa.</p>
            </div>
            <div className='WorkExperienceMainTimelineElement'>
                <p className='WorkExperienceMainTimelineElementFirstTitle'>Desarrollador de software IOT</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementSecondTitle'>Ingecom Sistemas · Jornada completa</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementThirdTitle'>jun. 2023 - sept. 2023 · 4 meses</p>
                <p className='WorkExperienceMainTimelineElementFourthTitle'>Lugaritz · Presencial</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementDescription'>-Creación de aplicación escaneo de matrículas para Android, con React Native, PHP y SQL Server.
 <br/> -Mantenimiento y desarrollo de aplicación para sensores de movimiento con su respectiva documentación con .NET. 
 <br/> -Programación para controlar LEDs mediante UART con Python.
 <br/> -Tramitación de denuncias mediante APIs externas con PHP.</p>
            </div>
            <div className='WorkExperienceMainTimelineElement'>
                <p className='WorkExperienceMainTimelineElementFirstTitle'>Desarrollador de software</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementSecondTitle'>Michelin · Contrato de prácticas</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementThirdTitle'>mar. 2023 - jun. 2023 · 4 meses</p>
                <p className='WorkExperienceMainTimelineElementFourthTitle'>Lasarte · Presencial</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementDescription'>-Desarrollo de aplicación de consola en .NET Core que permitió al equipo de ciberseguridad recopilar información, datos característicos de muchos de los dispositivos de la empresa de forma rápida y eficiente, eliminando la necesidad de revisar cada ordenador individualmente.
 <br/> -Conexión de los SAIs a la intranet de la empresa y gestión de sus datos.</p>
            </div>
            <div className='WorkExperienceMainTimelineElement'>
                <p className='WorkExperienceMainTimelineElementFirstTitle'>Desarrollador web</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementSecondTitle'>AMIE Consulting · Contrato de prácticas</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementThirdTitle'>mar. 2022 - may. 2022 · 3 meses</p>
                <p className='WorkExperienceMainTimelineElementFourthTitle'>Donosti · Presencial</p>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='WorkExperienceMainTimelineElementDescription'>-Se añadió funcionalidades adicionales a la plataforma de pago de la empresa utilizando CodeIgniter, Javascript, HTML y CSS. Estas mejoras incluyen la implementación de una tabla interactiva donde los usuarios pueden añadir, editar, eliminar y sumar cantidades de pagos. Esta nueva funcionalidad permite gestionar de manera más eficiente y precisa los pagos realizados, ofreciendo una interfaz intuitiva y fácil de usar que mejora la experiencia del usuario <br/> -Se añadió funcionalidades en una plataforma Industria 4.0</p>
            </div>
        </div>
      </article>
    )
  }