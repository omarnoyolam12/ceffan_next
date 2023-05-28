import sass from "../../../styles/sass/principal/Cursos.module.scss";

const CardFechas = () => {
    return (
        <div className={sass.card}>
            <div className={sass.dia}>
                <p>24 mar</p>
            </div>

            <div className={sass.info}>
                <p className={sass.curso}>Contabilidad para no contadores</p>

                <div className={sass.iconos}>
                    <div className={sass.dato}>
                        <i className='bx bx-time-five' ></i>
                        <p>20 horas</p>
                    </div>

                    <div className={sass.dato}>
                        <i className='bx bx-group' ></i>
                        <p>Presencial</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFechas