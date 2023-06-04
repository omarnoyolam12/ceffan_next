import Image from "next/image";
import Link from "next/link";
import sass from "../../../styles/sass/blog/Entrada.module.scss";
import imagen1 from "../../../../public/img/home.jpg"

const Entrada = () => {
    return (
        <article className={sass.entrada}>
            <figure>
                <Image 
                    src={imagen1}
                    fill
                    alt="Imagen Entrada"
                />
            </figure>

            <div className={sass.metadatos}>
                <p>Federico Martinez</p>
                <p>25 de mayo de 2023</p>
            </div>

            <h3>¿Cómo se hace un presupuesto y para qué sirve?</h3>

            <p className={sass.descripcion}>
                Un presupuesto te permitirá tener una mejor salud financiera, para así alcanzar tus metas y propósitos sin ningún problema. Además, al presupuestar de manera correcta tendrás más claridad al momento de planear cómo gastar tu dinero. Por ejemplo, crear una cuenta de ahorro para poder realizar el viaje de tus sueños, iniciar un fondo para comprar tu nueva casa, incluso poder liquidar de una buena vez esa deuda que tenías atrasada y no te dejaba dormir.
            </p>

            <div className={sass.enlaces}>
                <Link 
                    href={'/blog/como-se-hace-un-presupuesto-y-para-que-sirve'} className={sass.enlace}
                >
                    Leer más...
                </Link>

                <div className={sass.redes}>
                    <p>Compartir:</p>
                    <Link href={'/'}>
                        <i className='bx bxl-facebook'></i>
                    </Link>
                    <Link href={'/'}>
                        <i className='bx bxl-instagram-alt' ></i>
                    </Link>
                    <Link href={'/'}>
                        <i className='bx bxl-linkedin' ></i>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Entrada