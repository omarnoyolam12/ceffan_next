import Link from "next/link";
import Image from "next/image";
import { CirculosFondo } from "./"
import style from "../../../styles/principal/Hero.module.css";
import sass from "../../../styles/sass/principal/Hero.module.scss";
import header from "../../../../public/img/header.jpg";

const Hero = () => {
    return (
        <header className={sass.header}>
            <div className={sass.relative}>
                <div className={`contenedor ${sass.texto}`}>
                    <p className={sass.aprender}>Aprender</p>
                    <h1 className={sass.titulo}>Administación, Contabilidad o Finanzas</h1>
                    <p className={sass.frase}>Es un Bien Necesario, para poder crecer de manera personal y en tu negocio.</p>

                    <Link className={sass.link} href='/'>
                        <p>Comenzar</p>
                        <i className='bx bx-arrow-back'></i>
                    </Link>         
                </div>

                <CirculosFondo
                    width={550}
                    height={550}
                    top={450}
                    left={1150}
                    fondo
                />

                <CirculosFondo
                    width={700}
                    height={700}
                    top={-400}
                    left={550}
                />

                <CirculosFondo
                    width={800}
                    height={300}
                    top={600}
                    left={550}
                />

                <CirculosFondo
                    width={50}
                    height={50}
                    top={100}
                    left={100}
                    fondo
                />

                <CirculosFondo
                    width={500}
                    height={500}
                    top={500}
                    left={-250}
                    fondo
                />
            </div>


            <div className={sass.imagen}>
                <figure>
                    <Image
                        src={header}
                        fill
                        priority
                        alt="Header"
                    />
                </figure>
            </div>
        </header>
    )
}

export default Hero