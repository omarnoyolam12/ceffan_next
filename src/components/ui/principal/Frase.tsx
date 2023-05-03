import Image from "next/image";

import style from "../../../styles/principal/Frase.module.css";
import conocimiento from "../../../../public/img/conocimiento.jpg";

const Frase = () => {
    return (
        <div className={style.seccion}>

                <div className={style.cita}>
                    <i className='bx bxs-quote-alt-left'></i>

                    <p className={style.frase}>
                        Invertir en conocimiento produce siempre los mejores beneficios.
                    </p>

                    <p className={style.autor}>
                        Benjamin Franklin
                    </p>
                </div>

                
                <figure className={style.imagen}>
                    {/* <Image
                        src={conocimiento}
                        width={700}
                        height={500}
                        alt="Imagen"
                    /> */}
                </figure>
        </div>
    )
}

export default Frase