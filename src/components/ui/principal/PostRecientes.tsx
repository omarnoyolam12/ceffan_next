import Link from "next/link";
import { EntradaPost } from "./"

import style from "../../../styles/principal/PostRecientes.module.css";


const PostRecientes = () => {
    return (
        <section className={`margen ${style.seccion}`}>
            <div className={style.encabezado}>
                <div>
                    <h2 className="titulo_seccion">
                        Blog
                    </h2>
                    <p className={style.mensaje}>
                        Explora nuestros <span>temas recientes</span>
                    </p>
                </div>

                <Link
                    href='/blog'
                    className='ver_mas'
                >
                    <p>Ver más</p>
                    <i className='bx bx-right-arrow-alt'></i>
                </Link>
            </div>

            <div className={style.grid}>
                <EntradaPost/>
                <EntradaPost/>
                <EntradaPost/>
            </div>
        </section>
    )
}

export default PostRecientes