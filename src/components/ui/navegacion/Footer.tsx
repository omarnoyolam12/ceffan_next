import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/img/logo.svg";
import style from "../../../styles/principal/Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="contenedor">
                <div className={style.fila}>
                    <figure className={style.logo}>
                        <Image 
                            src={logo}
                            alt="Logo Ceffan"
                            priority
                            fill
                        />
                    </figure>

                    <div className={style.contacto}>
                        <ul className={style.redes}>
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

                        <div className={style.numeros}>
                            <i className='bx bx-phone' ></i>
                            <p>
                                5589511281-5589511395-5592252886
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.copyright}>
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