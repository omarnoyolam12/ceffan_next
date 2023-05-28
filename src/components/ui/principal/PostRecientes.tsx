import Link from "next/link";
import { EntradaPost } from "./"

import sass from "../../../styles/sass/principal/PostRecientes.module.scss";


const PostRecientes = () => {
    return (
        <section className={`contenedor ${sass.seccion}`}>
            <div className={sass.encabezado}>
                <div className={sass.texto}>
                    <h2 className="nombre-seccion">
                        Blog
                    </h2>
                    <p className={sass.frase}>
                        Explora nuestros <span>temas recientes</span>
                    </p>
                </div>

                <Link
                    href='/blog'
                >
                    <p>Ver más</p>
                    <i className='bx bx-right-arrow-alt'></i>
                </Link>
            </div>

            <div className={sass.grid}>
                <EntradaPost/>
                <EntradaPost/>
                <EntradaPost/>
            </div>
        </section>
    )
}

export default PostRecientes