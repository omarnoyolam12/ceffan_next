import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/img/logo.svg";
import sass from "../../../styles/sass/navegacion/barraNav.module.scss";

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
        <nav className={sass.barra}>
            <div className={`contenedor ${sass.contenedor}`}>
                <figure className={sass.logo}>
                    <Image 
                        src={logo}
                        alt="Logo Ceffan"
                        priority
                        fill
                    />
                </figure>

                <ul className={`${sass.enlaces} ${menuAbierto ? '' : sass.esconder}`}>
                    {enlaces.map(enlace=>(
                        <li key={enlace.pagina}>
                            <Link 
                                href={enlace.url}
                                className={router.pathname === enlace.url ? sass.activa : sass.desactiva}
                            >
                                {enlace.pagina}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                <div 
                    className={`${sass.overlay} ${menuAbierto ? sass.ver : ''}`}
                    onClick={toogleMenu}
                >
                </div>

                <i 
                    className={`bx bx-menu ${sass.menu}`}
                    onClick={toogleMenu}
                ></i>

            </div>
        </nav>
    )
}

export default Navegacion