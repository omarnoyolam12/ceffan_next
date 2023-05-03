import Image from "next/image";
import style from "../../../styles/principal/GridCursos.module.css";

import contabilidad from "../../../../public/img/contabilidad.svg";
import auditoria from "../../../../public/img/auditoria.svg";
import suministros from "../../../../public/img/suministros.svg";
import recursos from "../../../../public/img/recursos.svg";

const GridCursos = () => {
    return (
        <div className={style.grid}>
            <div className={style.contabilidad}>
                <figure>
                    <Image
                        src={contabilidad}
                        fill
                        alt="contabilidad"
                    />
                </figure>

                <div className={style.categoria}>
                    <p>Contabilidad</p>
                </div>
            </div>

            <div className={style.auditoria}>
                <figure>
                    <Image
                        src={auditoria}
                        fill
                        alt="auditoria"
                    />
                </figure>

                <div className={style.categoria}>
                    <p>Auditoría</p>
                </div>
            </div>

            <div className={style.suministros}>
                <figure>
                    <Image
                        src={suministros}
                        fill
                        alt="suministros"
                    />
                </figure>

                <div className={style.categoria}>
                    <p>Cadena de suministros</p>
                </div>
            </div>

            <div className={style.recursos}>
                <figure>
                    <Image
                        src={recursos}
                        fill
                        alt="recursos"
                    />
                </figure>

                <div className={style.categoria}>
                    <p>Recursos humanos</p>
                </div>
            </div>
        </div>
    )
}

export default GridCursos