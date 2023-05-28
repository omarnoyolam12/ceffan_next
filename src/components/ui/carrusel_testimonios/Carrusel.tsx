import { FC, useState, useEffect } from "react";
import Image from "next/image";

import sass from "../../../styles/sass/principal/Testimonios.module.scss";
import { Testimonio } from "@/interfaces";

interface Props {
    testimonios: Testimonio[]
}

const Carrusel: FC<Props> = ({testimonios}) => {

    const [indiceTestimonio, setIndiceTestimonio] = useState(0);
    const [verTestimonio, setVerTestimonio] = useState<Testimonio>(testimonios[indiceTestimonio]);
    const numeroDeTestimonios = testimonios.length;

    useEffect(()=>{

        const testimonio = testimonios[indiceTestimonio];
        setVerTestimonio(testimonio);

    }, [indiceTestimonio, testimonios]);

    // *Siguiente testimonio-------------------------------------------------
    const siguiente = ()=>{
        
        if(indiceTestimonio < numeroDeTestimonios - 1){
            setIndiceTestimonio(indiceTestimonio + 1);
        }
        else{
            setIndiceTestimonio(0);
        }
    }

    // *Testimonio Previo----------------------------------------------------
    const atras = ()=>{

        if(indiceTestimonio != 0){
            setIndiceTestimonio(indiceTestimonio - 1);
        }
        else{
            setIndiceTestimonio(numeroDeTestimonios - 1);
        }
    }

    return (
        <>
            <div className={sass.carrusel}>
                <div className={sass.encabezado}>
                    <figure className={sass.foto}>
                        <Image
                            src={verTestimonio!.imagen}
                            fill
                            alt="Imagen Testimonio"
                        />
                    </figure>

                    <div>
                        <p className={sass.nombre}>{verTestimonio?.nombre}</p>
                        <p className={sass.puesto}>{verTestimonio?.puesto}</p>
                    </div>
                </div>

                <p className={sass.texto}>
                    {verTestimonio?.texto}
                </p>
            </div>

            <div className={sass.botones}>
                <button
                    onClick={atras}
                >
                    <i className='bx bxs-left-arrow-square' ></i>
                </button>
                
                <button
                    onClick={siguiente}
                >
                    <i className='bx bxs-right-arrow-square'></i>
                </button>
            </div>
        </>
    )
}

export default Carrusel