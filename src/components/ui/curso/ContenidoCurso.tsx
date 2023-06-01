import { Descripcion, Formulario, Fechas } from "./";
import sass from "../../../styles/sass/curso/ContenidoCurso.module.scss";


const ContenidoCurso = () => {
    return (
        <main className={`contenedor ${sass.seccion}`}>
            <div className={sass.descripcion}>
                <Descripcion/>
            </div>

            <div className={sass.formulario}>
                <Formulario/>
            </div>

            <div className={sass.fechas}>
                <Fechas/>
            </div>
        </main>
    )
}

export default ContenidoCurso