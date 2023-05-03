import { FC } from 'react';
import style from "../../../styles/principal/Soluciones.module.css";

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
        <div className={style.tarjeta}>
            <i className={icono}></i>
            <p className={style.titulo}>
                {titulo}
            </p>
            <p className={style.info}>
                {info}
            </p>
        </div>
    )
}

export default ListaSoluciones