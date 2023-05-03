import { FC } from "react";

interface Parametros {
    width: number,
    height: number,
    top: number,
    left: number,
    fondo?: boolean
}

const CirculosFondo: FC<Parametros> = (parametros) => {

    const { width, height, top, left, fondo } = parametros;

    return (
        <div
            style={{
                position: 'absolute',
                width,
                height,
                borderRadius: '50%',
                backgroundColor: fondo ? '#0C2444' : 'transparent',
                border: fondo ? 'none' : '2px solid #0C2444',
                top: top,
                left: left
            }}
        >

        </div>
    )
}

export default CirculosFondo