import '../styles/AboutMe.css'
import AboutMePhoto from '../assets/UnaiAlfaro.png'
import Javascript from '../assets/javascript.svg'
import Python from '../assets/python.svg'
import NodeJS from '../assets/node_js.svg'
import MifrosoftNet from '../assets/microsoft_net.svg'
import ReactNative from '../assets/react_native.svg'


export default function AboutMe({isLight}) {
    
    return(
        <section id='AboutMe' className='aboutMeMain'>
            <div style={{color: isLight ? 'black' : '#FFFFFF'}} className='aboutMeMainTitle'>
                <p>Sobre mí</p>
            </div>
            <div className='aboutMeMainTitlePhotoDescription'>
                <img src={AboutMePhoto}/>
                <p style={{color: isLight ? 'black' : '#FFFFFF'}}>Desde pequeño jugaba a <span className='aboutMeMainTitlePhotoDescriptionPurple'>videojuegos en el ordenador</span> haciendo que este en <span className='aboutMeMainTitlePhotoDescriptionPurple'>contacto con la tecnología</span>, este interés me llevó a especializarme en el mundo del <span className='aboutMeMainTitlePhotoDescriptionPurple'>desarrollo de software y la ciberseguridad.</span> <br/><br/> A lo largo de mi trayectoria he mejorado mi <span className='aboutMeMainTitlePhotoDescriptionPurple'>capacidad analítica</span> y aumentando la <span className='aboutMeMainTitlePhotoDescriptionPurple'>habilidad de resolución de problemas</span> en el código. Me apasionan los <span className='aboutMeMainTitlePhotoDescriptionPurple'>nuevos desafíos técnicos</span>, explorando <span className='aboutMeMainTitlePhotoDescriptionPurple'>soluciones que impulsen el progreso y la eficiencia</span>. <br/><br/> Estoy emocionado por las <span className='aboutMeMainTitlePhotoDescriptionPurple'>nuevas oportunidades laborales</span>, ya sea desarrollando aplicaciones innovadores, fortaleciendo la <span className='aboutMeMainTitlePhotoDescriptionPurple'>seguridad de la empresa</span> o explorando las <span className='aboutMeMainTitlePhotoDescriptionPurple'>últimas tendencias tecnologías</span>, estoy dispuesto a asumir <span className='aboutMeMainTitlePhotoDescriptionPurple'>nuevos retos</span> y dejar una <span className='aboutMeMainTitlePhotoDescriptionPurple'>huella positiva.</span><br/><br/>Fuera del ámbito técnico, valoro el <span className='aboutMeMainTitlePhotoDescriptionPurple'>trabajo en equipo y la colaboración</span>, creo en la <span className='aboutMeMainTitlePhotoDescriptionPurple'>perspectivas diversas</span> para lograr la <span className='aboutMeMainTitlePhotoDescriptionPurple'>solución más solida</span>. Me esfuerzo en ser capaz de <span className='aboutMeMainTitlePhotoDescriptionPurple'>explorar y encontrar la mejor solución</span> transmitiendo <span className='aboutMeMainTitlePhotoDescriptionPurple'>ideas claras y concisas</span>.</p>
            </div>
            <div className='aboutMeMainSkills'>
                <p>APTITUDES</p>
                <div className='aboutMeMainSkillsPhotoContainer'>
                    <div className='aboutMeMainSkillsPhotoContainerElements'>
                        <img src={MifrosoftNet}/>
                        <img src={Python}/>
                        <img src={Javascript}/>
                    </div>
                    <div className='aboutMeMainSkillsPhotoContainerElements'>
                        <img src={NodeJS}/>
                        <img src={ReactNative}/>
                    </div>
                </div>
            </div>
            <div  className='aboutMeMainTimelineTitle'>
                <p>ESTUDIOS</p>
            </div>
            <div style={{borderLeft: isLight ? '3px solid #444AA7' : '3px solid #FFFFFF'}} className='aboutMeMainTimeline'>
                <div className='aboutMeMainTimelineElement'>
                    <p className='aboutMeMainTimelineElementFirstTitle'>ESPECIALIZACIÓN DE CIBERSEGURIDAD</p>
                    <p className='aboutMeMainTimelineElementSecondTitle'>Txurdinaga, Bilbao (sept. 2023 - may. 2024)</p>
                    <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='aboutMeMainTimelineElementDescription'>
                        <b>● Incidentes de Ciberseguridad:</b><br/>
                        &ensp;&ensp;&ensp;-Identificación y análisis de amenazas y vulnerabilidades<br/>
                        &ensp;&ensp;&ensp;-Desarrollo y ejecución de respuesta a incidentes<br/>
                        &ensp;&ensp;&ensp;-Gestión de ataques informáticos y violaciones de datos<br/>
                        <b>● Bastionado de redes y sistemas:</b><br/>
                        &ensp;&ensp;&ensp;-Configuración y gestión de firewalls<br/>
                        &ensp;&ensp;&ensp;-Aplicación de parches y actualizaciones de seguridad<br/>
                        &ensp;&ensp;&ensp;-Implementación de mejores prácticas en la configuración de sistemas<br/>
                        <b>● Puesta en producción segura:</b><br/>
                        &ensp;&ensp;&ensp;-Revisión y auditoría de código para detectar vulnerabilidades<br/>
                        &ensp;&ensp;&ensp;-Configuración segura de servicios y aplicaciones<br/>
                        &ensp;&ensp;&ensp;-Implementación de medidas de seguridad durante el despliegue de sistemas<br/>
                        <b>● Análisis Forense Informático:</b><br/>
                        &ensp;&ensp;&ensp;-Técnicas de recuperación de datos y análisis de dispositivos comprometidos<br/>
                        &ensp;&ensp;&ensp;-Revisión y análisis de logs de sistemas y aplicaciones<br/>
                        &ensp;&ensp;&ensp;-Investigación de incidentes de seguridad para determinar el origen y alcance del ataque<br/>
                        <b>● Hacking Ético:</b><br/>
                        &ensp;&ensp;&ensp;-Simulación de ataques informáticos hacía máquinas de Hack The Box<br/>
                        &ensp;&ensp;&ensp;-Evaluaciones de vulnerabilidad utilizando herramientas automatizadas<br/>
                        &ensp;&ensp;&ensp;-Documentación y presentación de informes de seguridad<br/>
                        <b>● Normativa de Ciberseguridad:</b><br/>
                        &ensp;&ensp;&ensp;-Conocimiento y cumplimiento de GDPR (Reglamento General de Protección de Datos)<br/>
                        &ensp;&ensp;&ensp;-Adopción de estándares de seguridad establecidos por NIST (National Institute of Standards and Technology)<br/>
                        &ensp;&ensp;&ensp;-Evaluación y aplicación de regulaciones locales e internacionales de ciberseguridad<br/>
                        <b>● Fundamentos Básicos:</b><br/>
                        &ensp;&ensp;&ensp;-Simulación de topología y configuraciones de redes con GNS3<br/>
                        &ensp;&ensp;&ensp;-Comprensión de principios de criptografía y su aplicación en la protección de datos<br/>
                        &ensp;&ensp;&ensp;-Estudio de modelos de seguridad como el Modelo CIA (Confidencialidad, Integridad y Disponibilidad)<br/>
                        &ensp;&ensp;&ensp;-Conocimiento de conceptos esenciales de seguridad informática<br/>
                    </p>
                </div>
                <div className='aboutMeMainTimelineElement'>
                    <p className='aboutMeMainTimelineElementFirstTitle'>GRADO SUPERIOR EN DESARROLLO DE APLICACIONES WEB</p>
                    <p className='aboutMeMainTimelineElementSecondTitle'>AEG, Donosti (sept. 2022 - jun 2023)</p>
                    <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='aboutMeMainTimelineElementDescription'>
                        <b>● Programas Lógicos de Javascript:</b><br/>
                            &ensp;&ensp;&ensp;-Desarrollo de funcionalidades lógicas utilizando Javascript<br/>
                            &ensp;&ensp;&ensp;-Implementación de algoritmos y estructuras de datos en Javascript<br/>
                        <b>● Aplicación móvil en React Native:</b><br/>
                            &ensp;&ensp;&ensp;-Creación de aplicaciones móviles multiplataforma con React Native<br/>
                            &ensp;&ensp;&ensp;-Participación en proyectos grupales con hitos definidos y reuniones semanales<br/>
                            &ensp;&ensp;&ensp;-Desarrollo de una aplicación móvil en colaboración con toda la clase, siguiendo un ciclo de vida de desarrollo completo<br/>
                        <b>● Node.js APIs REST:</b><br/>
                            &ensp;&ensp;&ensp;-Desarrollo de una API RESTful para la integración con aplicaciones móviles<br/>
                            &ensp;&ensp;&ensp;-Implementación de servicios backend utilizando Node.js<br/>
                            &ensp;&ensp;&ensp;-Manejo de peticiones HTTP y configuración de rutas<br/>
                        <b>● MongoDB para la Base de Datos:</b><br/>
                            &ensp;&ensp;&ensp;-Configuración y gestión de bases de datos NoSQL con MongoDB<br/>
                            &ensp;&ensp;&ensp;-Diseño y normalización de esquemas de datos<br/>
                            &ensp;&ensp;&ensp;-Realización de operaciones CRUD (Create, Read, Update, Delete) en MongoDB<br/>
                        <b>● Github y Git para el control de versiones:</b><br/>
                            &ensp;&ensp;&ensp;-Uso de Git para el control de versiones de los proyectos realizados<br/>
                            &ensp;&ensp;&ensp;-Gestión de repositorios, ramas, merges y commits<br/>
                            &ensp;&ensp;&ensp;-Resolución de conflictos y colaboración en equipos mediante Git<br/>
                        <b>● Jira para la Gestión de Tareas:</b><br/>
                            &ensp;&ensp;&ensp;-Gestión de proyectos y tareas utilizando Jira<br/>
                            &ensp;&ensp;&ensp;-Creación y seguimiento de issues, historias de usuario y sprints<br/>
                            &ensp;&ensp;&ensp;-Colaboración en equipos y manejo de flujos de trabajo ágiles<br/>
                    </p>
                </div>
                <div className='aboutMeMainTimelineElement'>
                    <p className='aboutMeMainTimelineElementFirstTitle'>GRADO SUPERIOR DE APLICACIONES MULTIPLATAFORMA</p>
                    <p className='aboutMeMainTimelineElementSecondTitle'>Cebanc, Donosti (sept. 2020 - jun 2022)</p>
                    <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='aboutMeMainTimelineElementDescription'>
                        <b>● Sistemas informáticos:</b><br/>
                            &ensp;&ensp;&ensp;-Instalación y configuración de sistemas operativos<br/>
                            &ensp;&ensp;&ensp;-Administración y gestión de usuarios y permisos<br/>
                            &ensp;&ensp;&ensp;-Configuración de redes y servicios de red<br/>
                            &ensp;&ensp;&ensp;-Seguridad de sistemas informáticos<br/>
                        <b>● Bases de datos:</b><br/>
                            &ensp;&ensp;&ensp;-Diseño y modelo de bases de datos relacionales<br/>
                            &ensp;&ensp;&ensp;-Lenguaje SQL y PL-SQL para gestión y manipulación de datos en Oracle<br/>
                            &ensp;&ensp;&ensp;-Administración y optimización de bases de datos<br/>
                            &ensp;&ensp;&ensp;-Introducción a bases de datos NoSQL, MongoDB<br/>
                        <b>● Programación:</b><br/>
                            &ensp;&ensp;&ensp;-Fundamentos de programación y estructuras de control<br/>
                            &ensp;&ensp;&ensp;-Programación orientada a objetos<br/>
                            &ensp;&ensp;&ensp;-Desarrollo de aplicaciones de Java y C# en .NET<br/>
                        <b>● Lenguajes de marcas y sistemas de gestión de información:</b><br/>
                            &ensp;&ensp;&ensp;-Desarrollo web con HTML, CSS y JavaScript<br/>
                            &ensp;&ensp;&ensp;-Intercambio de información usando XML y JSON<br/>
                            &ensp;&ensp;&ensp;-Desarrollo de módulos para ERPs como Oddo<br/>
                        <b>● Entornos de desarrollo:</b><br/>
                            &ensp;&ensp;&ensp;-Uso de diferentes IDEs como Visual Studio Code, Eclipse, IntelliJ etc.<br/>
                            &ensp;&ensp;&ensp;-Control de versiones con Git<br/>
                            &ensp;&ensp;&ensp;-Configuración de entornos de desarrollo multiplataforma<br/>
                        <b>● Desarrollo de interfaces:</b><br/>
                            &ensp;&ensp;&ensp;-Diseño de interfaces de usuario (UI) y experiencia de usuario (UX)<br/>
                            &ensp;&ensp;&ensp;-Frameworks y bibliotecas para diseño de interfaces (Bootstrap, Material UI)<br/>
                        <b>● Programación multiplataforma:</b><br/>
                            &ensp;&ensp;&ensp;-Desarrollo de aplicaciones web responsive<br/>
                            &ensp;&ensp;&ensp;-Integración con APIs y servicios externos<br/>
                        <b>● Acceso a datos:</b><br/>
                            &ensp;&ensp;&ensp;-Técnicas de acceso y manipulación de datos<br/>
                            &ensp;&ensp;&ensp;-Conexiones a bases de datos desde aplicaciones<br/>
                        <b>● Desarrollo de Aplicaciones Móviles:</b><br/>
                            &ensp;&ensp;&ensp;-Desarrollo de aplicación móvil de final de proyecto sobre una app sobre compra y facturación de componentes de ordenador con todos los requisitos solicitados<br/>
                            &ensp;&ensp;&ensp;-Mantenimiento y funcionalidades de la aplicación móvil<br/>
                        <b>● Servicios y Procesos:</b><br/>
                            &ensp;&ensp;&ensp;-Programación de servicios y procesos en sistemas operativos<br/>
                            &ensp;&ensp;&ensp;-Gestión de hilos y concurrencia<br/>
                            &ensp;&ensp;&ensp;-Desarrollo de servicios web y microservicios<br/>
                    </p>
                </div>
                <div className='aboutMeMainTimelineElement'>
                    <p className='aboutMeMainTimelineElementFirstTitle'>GRADO MEDIO DE SISTEMAS MICROINFORMÁTICOS Y REDES</p>
                    <p className='aboutMeMainTimelineElementSecondTitle'>Plaiaundi, Irún (sept. 2018 - may. 2020)</p>
                    <p style={{color: isLight ? 'black' : '#FFFFFF'}} className='aboutMeMainTimelineElementDescription'>
                        <b>● Redes locales:</b><br/>
                        &ensp;&ensp;&ensp;-Conocimientos de los componentes de la red local como Router, Switch, Hub, Firewall, Servidores y Repetidores<br/>
                        &ensp;&ensp;&ensp;-Simulación de distintas topologías de red redes en Packet Tracer<br/>
                        &ensp;&ensp;&ensp;-Configuración de Direccionamiento IP, DHCP, DNS, FTP, redes LAN, redes WAN, configuración router, enrutamiento y seguridad de redes<br/>
                        <b>● Montaje y mantenimiento de equipos informáticos:</b><br/>
                        &ensp;&ensp;&ensp;-Conocimiento de la función de cada componente del ordenador<br/>
                        &ensp;&ensp;&ensp;-Montaje y configuración<br/>
                        &ensp;&ensp;&ensp;-Instalación y actualización de sistemas operativos<br/>
                        &ensp;&ensp;&ensp;-Diagnóstico y reparación de averías<br/>
                        <b>● Sistemas operativos monopuesto:</b><br/>
                        &ensp;&ensp;&ensp;-Instalación y configuración de sistemas operativos (Windows y Linux)<br/>
                        &ensp;&ensp;&ensp;-Administración de usuarios y permisos <br/>
                        &ensp;&ensp;&ensp;-Diagnóstico y reparación de averías<br/>
                        &ensp;&ensp;&ensp;-Gestión de archivos y directorios<br/>
                        &ensp;&ensp;&ensp;-Configuración de dispositivos y controladores<br/>
                        <b>● Aplicaciones ofimáticas (Office y Libre office):</b><br/>
                        &ensp;&ensp;&ensp;-Documentos de texto<br/>
                        &ensp;&ensp;&ensp;-Hojas de cálculo<br/>
                        &ensp;&ensp;&ensp;-Bases de datos<br/>
                        &ensp;&ensp;&ensp;-Presentaciones<br/>
                        &ensp;&ensp;&ensp;-Utilización de software de gestión de proyectos<br/>
                        <b>● Aplicaciones Web:</b><br/>
                        &ensp;&ensp;&ensp;-HTML<br/>
                        &ensp;&ensp;&ensp;-CSS<br/>
                        &ensp;&ensp;&ensp;-Javascript<br/>
                    </p>
                </div>
            </div>
        </section>
    )
}