import Image from "next/image";
import style from "../../../styles/principal/Nosotros.module.css";
import nosotros from "../../../../public/img/nosotros.jpg";

const Nosotros = () => {
    return (
        <section className={`margen ${style.seccion}`}>
            <figure className={style.imagen}>
                <Image
                    src={nosotros}
                    fill
                    alt="Nosotros"
                />
            </figure>

            <div className={style.nosotros}>

                <div className={style.subtitulo}>
                    <h2>Nosotros</h2>
                    <p className={style.frase}>
                        Estamos emocionados de ser parte de tu viaje.
                    </p>
                </div>

                <div className={style.info}>
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