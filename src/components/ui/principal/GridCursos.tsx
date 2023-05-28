import Image from "next/image";
import sass from "../../../styles/sass/principal/Cursos.module.scss";

import contabilidad from "../../../../public/img/contabilidad.svg";
import auditoria from "../../../../public/img/auditoria.svg";
import suministros from "../../../../public/img/suministros.svg";
import recursos from "../../../../public/img/recursos.svg";

const GridCursos = () => {
    return (
        <div className={sass.grid}>
            <div className={sass.tarjeta}>
                <figure>
                    <Image
                        src={contabilidad}
                        fill
                        alt="contabilidad"
                    />
                </figure>

                <div className={sass.categoria}>
                    <p>Contabilidad</p>
                </div>
            </div>

            <div className={sass.tarjeta}>
                <figure>
                    <Image
                        src={auditoria}
                        fill
                        alt="auditoria"
                    />
                </figure>

                <div className={sass.categoria}>
                    <p>Auditoría</p>
                </div>
            </div>

            <div className={sass.tarjeta}>
                <figure>
                    <Image
                        src={suministros}
                        fill
                        alt="suministros"
                    />
                </figure>

                <div className={sass.categoria}>
                    <p>Cadena de suministros</p>
                </div>
            </div>

            <div className={sass.tarjeta}>
                <figure>
                    <Image
                        src={recursos}
                        fill
                        alt="recursos"
                    />
                </figure>

                <div className={sass.categoria}>
                    <p>Recursos humanos</p>
                </div>
            </div>
        </div>
    )
}

export default GridCursos