import Image from "next/image";
import Link from "next/link";
import { GridCursos, CardFechas } from ".";

import style from "../../../styles/principal/Cursos.module.css";

import cuadricula1 from "../../../../public/img/cuadricula1.svg"

const SecCursos = () => {
    return (
        <section className={style.seccion}>

            <div className={style.cuadricula1}>
                <div className={style.absoluto}>
                    <Image
                        src={cuadricula1}
                        fill
                        alt=""
                    />
                </div>
            </div>

            <div className={style.cuadricula2}>
                <div className={style.absoluto}>
                    <Image
                        src={cuadricula1}
                        fill
                        alt=""
                    />
                </div>
            </div>


            <div className={`margen ${style.contenedor}`}>
                <div className={style.encabezado}>
                    <div>
                        <h2 className="titulo_seccion">Cursos</h2>
                        <p className={style.descripcion}>
                            Toma el control de tu <span>futuro económico</span>.
                        </p>
                    </div>

                    <Link 
                        href='/cursos'
                        className='ver_mas'
                    >
                        <p>Ver más</p>
                        <i className='bx bx-right-arrow-alt'></i>
                    </Link>
                </div>

                <div className={style.info}>
                    <div className={style.fechas}>
                        <CardFechas/>
                        <CardFechas/>
                        <CardFechas/>
                    </div>

                    <GridCursos/>   
                </div>
            </div>
        </section>
    )
}

export default SecCursos