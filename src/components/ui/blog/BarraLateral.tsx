import { EntradaReciente } from "./"
import sass from "../../../styles/sass/blog/BarraLateral.module.scss";


const BarraLateral = () => {
    return (
        <>
            <div className={sass.busqueda}>
                <input type="text" placeholder="Buscar..."/>
                <button>
                    <i className='bx bx-search' ></i>
                </button>
            </div>

            <div className={sass.post}>
                <p className={sass.seccion}>Post Recientes</p>

                <EntradaReciente/>
                <EntradaReciente/>
                <EntradaReciente/>
            </div>

            <div className={sass.categorias}>
                <p className={sass.seccion}>Categorías</p>

                <div className={sass.listado}>
                    <p>Finanzas</p>
                    <p>(4)</p>
                </div>
                <div className={sass.listado}>
                    <p>Contabilidad</p>
                    <p>(4)</p>
                </div>
                <div className={sass.listado}>
                    <p>Inversiones</p>
                    <p>(4)</p>
                </div>
                <div className={sass.listado}>
                    <p>Capacitación</p>
                    <p>(4)</p>
                </div>
                <div className={sass.listado}>
                    <p>Ahorro</p>
                    <p>(4)</p>
                </div>
            </div>

            <div className={sass.tags}>
                <p className={sass.seccion}>Tags</p>

                <div className={sass.listado}>
                    <p>Contabilidad</p>
                    <p>Auditoría</p>
                    <p>Impuestos</p>
                    <p>Economía</p>
                    <p>Educación Financiera</p>        
                    <p>Contabilidad empresarial</p>        
                </div>
            </div>
        </>
    )
}

export default BarraLateral