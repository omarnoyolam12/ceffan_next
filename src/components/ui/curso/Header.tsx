import Link from "next/link";
import sass from "../../../styles/sass/curso/Header.module.scss";

const Header = () => {
    return (
        <section className={sass.seccion}>
            <h1>Contabilidad para no contadores</h1>
            <p>
                <Link href={'/'}>Inicio</Link> &gt; <Link href={'/cursos'}>Cursos</Link> &gt; Contabilidad para no contadores
            </p>
        </section>
    )
}

export default Header