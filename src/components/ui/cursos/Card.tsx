import Image from "next/image";
import style from "../../../styles/cursos/Card.module.css";
import curso from "../../../../public/img/curso1.jpg";

const Card = () => {
    return (
        <article className={style.card}>
            <figure>
                <Image
                    src={curso}
                    fill
                    alt="Curso"
                />
            </figure>

            <div className={style.info}>
                <p className={style.tag}>Contabilidad</p>
                <h2 className={style.titulo}>Contabilidad para no contadores</h2>
                <p className={style.descripcion}>
                    Al finalizar este curso, serás capaz de identificar los términos y procesos de contabilidad que te permitirán ejecutar tu contabilidad básica.
                </p>
            </div>
        </article>
    )
}

export default Card