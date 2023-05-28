import Link from "next/link";
import { GridCursos, CardFechas } from ".";

import sass from "../../../styles/sass/principal/Cursos.module.scss";

const SecCursos = () => {
    return (
        <section className={`contenedor ${sass.seccion}`}>
            <div className={sass.encabezado}>
                <div className={sass.texto}>
                    <h2 className="nombre-seccion">Cursos</h2>
                    <p className={sass.titulo}>
                        Toma el control de tu <span>futuro económico</span>.
                    </p>
                </div>

                <Link 
                    href='/cursos'
                    className={sass.link}
                >
                    <p>Ver más</p>
                    <i className='bx bx-right-arrow-alt'></i>
                </Link>
            </div>

            <div className={sass.info}>
                <div className={sass.fechas}>
                    <CardFechas/>
                    <CardFechas/>
                    <CardFechas/>
                </div>

                <GridCursos/>   
            </div>
        </section>
    )
}

export default SecCursos