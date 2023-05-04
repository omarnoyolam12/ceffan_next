import Link from "next/link";
import Image from "next/image";
import { CirculosFondo } from "./"
import style from "../../../styles/principal/Hero.module.css";
import header from "../../../../public/img/header.jpg";

const Hero = () => {
    return (
        <header className={style.header}>
            <div className={style.relative}>
                <div className={`margen ${style.texto}`}>
                    <p className={style.aprender}>Aprender</p>
                    <h1 className={style.titulo}>Administación, Contabilidad o Finanzas</h1>
                    <p className={style.frase}>Es un Bien Necesario, para poder crecer de manera personal y en tu negocio.</p>

                    <Link className={style.link} href='/'>
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


            <div className={style.imagen}>
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