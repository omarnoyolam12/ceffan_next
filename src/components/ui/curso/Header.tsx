import Image from "next/image";
import style from "../../../styles/curso/Header.module.css";
import curso from "../../../../public/img/curso1.jpg";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`margen ${style.curso}`}>
                <div className={style.info}>
                    <p>Contabilidad</p>
                    <h1 className={style.titulo}>Contabilidad para no contadores</h1>
                    <p className={style.descripcion}>
                        Al finalizar el curso, los participantes contarán con una sólida comprensión de la contabilidad y estarán equipados con las habilidades y el conocimiento necesarios para aplicar los conceptos contables en situaciones cotidianas. Este curso es ideal para aquellos que buscan mejorar su capacidad para tomar decisiones financieras informadas y estratégicas, tanto en el ámbito personal como profesional.
                    </p>
                </div>

                
                <Image
                    className={style.imagen}
                    src={curso}
                    width={400}
                    height={250}
                    priority
                    alt="Curso"
                />
                
            </div>
        </header>
    )
}

export default Header