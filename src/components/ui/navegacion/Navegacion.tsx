import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/img/logo.svg";

import style from "../../../styles/principal/Navegacion.module.css";

interface Enlaces {
    pagina: string,
    url: string
}

const enlaces: Enlaces[] = [
    {
        pagina: 'Inicio',
        url: '/'
    },
    {
        pagina: 'Cursos',
        url: '/cursos'
    },
    {
        pagina: 'Blog',
        url: '/blog'
    },
    {
        pagina: 'Contacto',
        url: '/contacto'
    },
]

const Navegacion = () => {

    const router = useRouter();

    const [menuAbierto, setMenuAbierto] = useState(false);

    const toogleMenu = ()=>{
        setMenuAbierto(!menuAbierto);
    }

    return (
        <nav className={style.navegador}>
            <div className={`margen ${style.contenido}`}>
                <figure className={style.logo}>
                    <Image 
                        src={logo}
                        alt="Logo Ceffan"
                        priority
                        fill
                    />
                </figure>

                <ul className={`${style.enlaces} ${menuAbierto ? '' : style.esconder}`}>
                    {enlaces.map(enlace=>(
                        <li key={enlace.pagina}>
                            <Link 
                                href={enlace.url}
                                className={router.pathname === enlace.url ? style.activa : style.desactiva}
                            >
                                {enlace.pagina}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                <div 
                    className={`${style.overlay} ${menuAbierto ? style.ver : ''}`}
                    onClick={toogleMenu}
                >
                </div>

                <i 
                    className={`bx bx-menu ${style.menu}`}
                    onClick={toogleMenu}
                ></i>

            </div>
        </nav>
    )
}

export default Navegacion