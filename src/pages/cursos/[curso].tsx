import { LayoutPage } from "@/components/layouts";
import { Header, CardFechas, Formulario } from "@/components/ui/curso";
import style from "../../styles/curso/Curso.module.css";

const Curso = () => {
    return (
        <LayoutPage
            titulo="Curso"
        >
            <Header/>

            <section className={`margen ${style.grid}`}>
                <div className={style.temario}>
                    <h3>
                        Temario
                    </h3>

                    <ul>
                        <li>Definiciones</li>
                        <li>Estados financieros</li>
                        <li>Postulados de contabilidad</li>
                        <li>Normas de información financiera</li>
                        <li>Clasificación de las cuentas</li>
                        <li>Depreciación contable</li>
                        <li>Depreciación fiscal</li>
                        <li>Principales cuentas del activo</li>
                        <li>Capital</li>
                        <li>Principales cuentas de resultados</li>
                        <li>Pólizas contables</li>
                        <li>Balanza de comprobación</li>
                        <li>Registros contables</li>
                        <li>Casos prácticos</li>
                    </ul>
                </div>

                <div className={style.fechas}>
                    <h3>
                        Próximas fechas
                    </h3>

                    <CardFechas/>
                    <CardFechas/>
                    <CardFechas/>
                </div>

                <div className={style.formulario}>
                    <h3>
                        Deseas más información
                    </h3>

                    <Formulario/>
                </div>
            </section>
        </LayoutPage>
    )
}

export default Curso