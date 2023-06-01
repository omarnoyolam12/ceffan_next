import sass from "../../../styles/sass/curso/Fechas.module.scss";

const Fechas = () => {
    return (
        <>
            <h2 className={sass.titulo}>
                Próximas Fechas
            </h2>

            <div className={sass.tarjeta}>
                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bx-calendar-check'></i>
                        <span>Inicio</span>
                    </p>
                    <p className={sass.info}>
                        05 de junio
                    </p>
                </div>

                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bx-time-five' ></i>
                        <span>Duración</span>
                    </p>
                    <p className={sass.info}>
                        24 hrs
                    </p>
                </div>

                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bxs-label' ></i>
                        <span>Días</span>
                    </p>
                    <p className={sass.info}>
                        Lunes, Miércoles, Viernes
                    </p>
                </div>

                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bx-group' ></i>
                        <span>Modalidad</span>
                    </p>
                    <p className={sass.info}>
                        Presencial
                    </p>
                </div>
            </div>
            <div className={sass.tarjeta}>
                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bx-calendar-check'></i>
                        <span>Inicio</span>
                    </p>
                    <p className={sass.info}>
                        05 de junio
                    </p>
                </div>

                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bx-time-five' ></i>
                        <span>Duración</span>
                    </p>
                    <p className={sass.info}>
                        24 hrs
                    </p>
                </div>

                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bxs-label' ></i>
                        <span>Días</span>
                    </p>
                    <p className={sass.info}>
                        Lunes, Miércoles, Viernes
                    </p>
                </div>

                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bx-group' ></i>
                        <span>Modalidad</span>
                    </p>
                    <p className={sass.info}>
                        Presencial
                    </p>
                </div>
            </div>
            <div className={sass.tarjeta}>
                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bx-calendar-check'></i>
                        <span>Inicio</span>
                    </p>
                    <p className={sass.info}>
                        05 de junio
                    </p>
                </div>

                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bx-time-five' ></i>
                        <span>Duración</span>
                    </p>
                    <p className={sass.info}>
                        24 hrs
                    </p>
                </div>

                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bxs-label' ></i>
                        <span>Días</span>
                    </p>
                    <p className={sass.info}>
                        Lunes, Miércoles, Viernes
                    </p>
                </div>

                <div className={sass.datos}>
                    <p className={sass.dato}>
                        <i className='bx bx-group' ></i>
                        <span>Modalidad</span>
                    </p>
                    <p className={sass.info}>
                        Presencial
                    </p>
                </div>
            </div>
        </>
    )
}

export default Fechas