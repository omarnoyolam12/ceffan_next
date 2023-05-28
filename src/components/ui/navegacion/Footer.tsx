import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/img/logo.svg";
import sass from "../../../styles/sass/navegacion/Footer.module.scss";

const Footer = () => {
    return (
        <footer className={sass.footer}>
            <div className="contenedor">
                <div className={sass.fila}>
                    <figure className={sass.logo}>
                        <Image 
                            src={logo}
                            alt="Logo Ceffan"
                            priority
                            fill
                        />
                    </figure>

                    <div className={sass.contacto}>
                        <ul className={sass.redes}>
                            <li>
                                <a href="" target="_blank">
                                    <i className='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    <i className='bx bxl-instagram' ></i>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    <i className='bx bx-envelope' ></i>
                                </a>
                            </li>
                        </ul>

                        <div className={sass.numeros}>
                            <i className='bx bx-phone' ></i>
                            <p>
                                5589511281-5589511395-5592252886
                            </p>
                        </div>
                    </div>
                </div>

                <div className={sass.copyright}>
                    <p>
                        Todos los derechos reservados 2023
                    </p>

                    <Link href='/aviso'>
                        Aviso de privacidad
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer