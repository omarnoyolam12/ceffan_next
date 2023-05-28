import Image from "next/image";
import sass from "../../../styles/sass/principal/Nosotros.module.scss";
import nosotros from "../../../../public/img/nosotros.jpg";

const Nosotros = () => {
    return (
        <section className={`contenedor ${sass.seccion}`}>
            <figure className={sass.imagen}>
                <Image
                    src={nosotros}
                    fill
                    alt="Nosotros"
                />
            </figure>

            <div className={sass.nosotros}>

                <div className={sass.subtitulo}>
                    <h2 className="nombre-seccion">Nosotros</h2>
                    <p className={sass.frase}>
                        Estamos emocionados de ser parte de tu viaje.
                    </p>
                </div>

                <div className={sass.info}>
                    <p>
                        Somos un grupo de profesionales con más de 20 años de experiencia  brindando soluciones educativas especializadas para adquirir y reforzar conocimientos prácticos en categorías de finanzas, administración y negocios. 
                    </p>
                    <p>
                        Lo que nos distingue es nuestro enfoque centrado en el cliente. Valoramos las relaciones a largo plazo y trabajamos en estrecha colaboración contigo para comprender tus metas y desafíos. Nuestro compromiso es brindarte soluciones personalizadas y resultados excepcionales que impulsen tu éxito.
                    </p>
                </div>
                

            </div>
        </section>
    )
}

export default Nosotros