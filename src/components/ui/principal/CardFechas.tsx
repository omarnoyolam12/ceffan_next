import style from "../../../styles/principal/CardFecha.module.css";

const CardFechas = () => {
    return (
        <div className={style.card}>
            <div className={style.dia}>
                <p>24 mar</p>
            </div>

            <div className={style.info}>
                <p className={style.curso}>Contabilidad para no contadores</p>

                <div className={style.iconos}>
                    <div className={style.icono}>
                        <i className='bx bx-time-five' ></i>
                        <p>20 horas</p>
                    </div>

                    <div className={style.icono}>
                        <i className='bx bx-group' ></i>
                        <p>Presencial</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFechas