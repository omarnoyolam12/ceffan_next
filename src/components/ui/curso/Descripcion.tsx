import Image from "next/image";
import sass from "../../../styles/sass/curso/Descripcion.module.scss";
import imagen1 from "../../../../public/img/curso1.jpg"

const Descripcion = () => {
    return (
        <>
            <h2 className={sass.titulo}>Contabilidad para no contadores</h2>
            <div className={sass.datos}>
                <p className={sass.calificacion}>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>

                    <span>5/5 (2)</span>
                </p>
                
                <p>
                    <i className='bx bx-user' ></i>
                    <span>5 inscritos</span>
                </p>
            </div>

            <figure className={sass.imagen}>
                <Image
                    src={imagen1}
                    fill
                    alt="Imagen Curso"
                />
            </figure>

            <div className={sass.descripcion}>
                <h2>Descripción</h2>
                <p>
                    Al finalizar este curso, serás capaz de identificar los términos y procesos de contabilidad que te permitirán ejecutar tu contabilidad básica.
                </p>
            </div>

            <div className={sass.temario}>
                <h2>Temario</h2>

                <ul>
                    <li><i className='bx bx-file'></i>Definiciones</li>
                    <li><i className='bx bx-file'></i>Estados financieros</li>
                    <li><i className='bx bx-file'></i>Estados financieros</li>
                    <li><i className='bx bx-file'></i>Postulados de contabilidad</li>
                    <li><i className='bx bx-file'></i>Normas de información financiera</li>
                    <li><i className='bx bx-file'></i>Clasificación de las cuentas</li>
                    <li><i className='bx bx-file'></i>Depreciación contable</li>
                    <li><i className='bx bx-file'></i>Depreciación fiscal</li>
                    <li><i className='bx bx-file'></i>Principales cuentas del activo</li>
                    <li><i className='bx bx-file'></i>Capital</li>
                    <li><i className='bx bx-file'></i>Principales cuentas de resultados</li>
                    <li><i className='bx bx-file'></i>Pólizas contables</li>
                    <li><i className='bx bx-file'></i>Balanza de comprobación</li>
                    <li><i className='bx bx-file'></i>Registros contables</li>
                    <li><i className='bx bx-file'></i>Casos prácticos</li>
                </ul>
            </div>
        </>
    )
}

export default Descripcion