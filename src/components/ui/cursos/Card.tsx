import Image from "next/image";
import Link from "next/link";
import sass from "../../../styles/sass/cursos/Card.module.scss";
import curso from "../../../../public/img/curso1.jpg";

const Card = () => {
    return (
        <article className={sass.card}>
            <figure>
                <Image
                    src={curso}
                    fill
                    alt="Curso"
                />
            </figure>

            <div className={sass.info}>
                <div className={sass.datos}>
                    <h2 className={sass.titulo}>Contabilidad para no contadores</h2>
                    <p className={sass.descripcion}>
                        Al finalizar este curso, serás capaz de identificar los términos y procesos de contabilidad que te permitirán ejecutar tu contabilidad básica.
                    </p>
                </div>

                <Link href={'/cursos/contabilidad-para-no-contadores'} className={sass.link}>
                    Detalles del curso
                </Link>
            </div>
        </article>
    )
}

export default Card