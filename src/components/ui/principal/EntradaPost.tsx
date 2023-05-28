import Image from "next/image";
import Link from "next/link";
import sass from "../../../styles/sass/principal/EntradaPost.module.scss";
import auditoria from "../../../../public/img/auditoria.jpg";

const EntradaPost = () => {
    return (
        <article className={sass.entrada}>
            <figure className={sass.imagen}>
                <Image
                    src={auditoria}
                    fill
                    alt="Entrada"
                />

                <Link href={'/'} className={sass.overlay}>
                    <p>Leer</p>
                </Link>
            </figure>

            <div className={sass.info}>
                <p className={sass.tags}>
                    Finanzas
                </p>

                <Link href={'/'} className={sass.titulo}>
                    Dictamen de auditoría y tipos de dictamen
                </Link>

                <p className={sass.descripcion}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, inventore libero doloribus illo magni officia qui accusantium fugiat corrupti perspiciatis facilis quam dignissimos. Sit iste nisi nemo soluta. Exercitationem hic repudiandae earum tempora nesciunt eligendi, molestiae, ut in voluptatum fugiat esse dolore omnis saepe commodi cumque eius provident, soluta adipisci.
                </p>

                <div className={sass.metadatos}>
                    <p className={sass.datos}>
                        <i className='bx bx-calendar-event'></i> {' '}
                        25 de abril del 2023
                    </p>

                    <p className={sass.datos}>
                        <i className='bx bx-user-circle' ></i> {' '}
                        Marlem Garcia
                    </p>
                </div>
            </div>
        </article>
    )
}

export default EntradaPost