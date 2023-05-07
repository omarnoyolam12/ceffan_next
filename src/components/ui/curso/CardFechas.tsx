import style from "../../../styles/curso/CardFecha.module.css";

const CardFechas = () => {
    return (
        <div className={style.card}>
            <p>
                <i className='bx bxs-calendar-event'></i>
                <span>Inicio: </span> 24 de marzo
            </p>
            <p>
                <i className='bx bxs-time-five'></i>
                <span>Duración: </span> 24 horas - 6hrs sabatinas
            </p>
            <p>
                <i className='bx bxs-group'></i>
                <span>Modalidad: </span> Presencial
            </p>
        </div>
    )
}

export default CardFechas