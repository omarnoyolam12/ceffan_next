import Image from "next/image";
import sass from "../../../styles/sass/blog/EntradaReciente.module.scss";
import imagen1 from "../../../../public/img/curso3.jpg";

const EntradaReciente = () => {
    return (
        <article className={sass.entrada}>
            <figure>
                <Image
                    src={imagen1}
                    fill
                    alt="Imagen Post"
                />
            </figure>

            <div className={sass.datos}>
                <p className={sass.titulo}>Guía de tarjeta de crédito para novatos</p>
                <p className={sass.fecha}>01 de junio de 2023</p>
            </div>
        </article>
    )
}

export default EntradaReciente