import Image from "next/image";
import Link from "next/link";
import style from "../../../styles/principal/EntradaPost.module.css";
import auditoria from "../../../../public/img/auditoria.jpg";

const EntradaPost = () => {
    return (
        <article className={style.entrada}>
            <figure className={style.imagen}>
                <Image
                    src={auditoria}
                    fill
                    alt="Entrada"
                />
            </figure>

            <div className={style.info}>
                <p className={style.tags}>
                    Finanzas
                </p>

                <p className={style.titulo}>
                    Dictamen de auditoría y tipos de dictamen
                </p>

                <p className={style.descripcion}>
                    El dictamen es el documento que emite el auditor como resultado de un examen...
                </p>

                <p className={style.datos}>
                    <i className='bx bx-calendar-event'></i> {' '}
                    25 de abril del 2023
                </p>

                <p className={style.datos}>
                    <i className='bx bx-user-circle' ></i> {' '}
                    Marlem Garcia
                </p>
            </div>

            <Link className={style.enlace} href='/'>
                <p>Leer más</p>
            </Link>
        </article>
    )
}

export default EntradaPost