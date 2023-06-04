import Link from "next/link";
import sass from "../../../styles/sass/blog/Grid.module.scss";
import { Entrada, BarraLateral } from "./";

const Grid = () => {
    return (
        <main className={`contenedor ${sass.layout}`}>
            <div className={sass.entradas}>
                <Entrada/>
                <Entrada/>
                <Entrada/>
                <Entrada/>
                <Entrada/>

                <div className={sass.paginacion}>
                    <Link className={sass.activo} href={'/'}>1</Link>
                    <Link href={'/'}>2</Link>
                    <Link href={'/'}>3</Link>
                    <Link href={'/'}>4</Link>
                    <Link href={'/'}>5</Link>
                </div>
            </div>

            <aside className={sass.acerca}>
                <BarraLateral/>
            </aside>
        </main>
    )
}

export default Grid