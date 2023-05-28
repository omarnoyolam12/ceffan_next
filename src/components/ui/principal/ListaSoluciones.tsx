import { FC } from 'react';
import sass from "../../../styles/sass/principal/Soluciones.module.scss";

interface Solucion {
    solucion: Datos
}

interface Datos {
    titulo: string,
    info: string,
    icono: string
}

const ListaSoluciones: FC<Solucion> = ({solucion}) => {

    const { info, titulo, icono } = solucion;

    return (
        <div className={sass.tarjeta}>
            <div>
                <div className={sass.icono}>
                    <i className={icono}></i>
                </div>
            </div>
            
            <div className={sass.contenido}>
                <p className={sass.titulo}>
                    {titulo}
                </p>
                <p className={sass.info}>
                    {info}
                </p>
            </div>
        </div>
    )
}

export default ListaSoluciones