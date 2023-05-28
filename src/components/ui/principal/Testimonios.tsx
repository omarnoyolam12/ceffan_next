import { Carrusel } from "../carrusel_testimonios";
import sass from "../../../styles/sass/principal/Testimonios.module.scss";
import { Testimonio } from "@/interfaces";

const testimonios: Testimonio[] = [
    {
        nombre: 'Mark Side',
        imagen: '/img/perfil.jpg',
        puesto: 'CEO Google',
        texto: 'Siento que he llegado a conocer muy bien a su personal, y se esfuerzan por encontrar respuestas y conseguir los resultados deseados. He lidiado con muchos servicios de soporte técnico y atención al cliente y estos tipos sacan a todos los demás del camino.'
    },
    {
        nombre: 'Jose Cortez',
        imagen: '/img/perfil2.jpg',
        puesto: 'Jefe Sistemas',
        texto: '¡El curso de finanzas superó todas mis expectativas! Aprendí conceptos clave de manera clara y práctica. Ahora tomo decisiones financieras con confianza. ¡Recomendado!'
    },
    {
        nombre: 'Angel Romero',
        imagen: '/img/perfil3.jpg',
        puesto: 'Bimbo Sistemas',
        texto: 'Estoy encantado con el curso de finanzas. Los materiales son completos y fáciles de entender. Aprendí estrategias financieras efectivas que han transformado mi enfoque en el manejo del dinero. ¡Gracias por esta valiosa oportunidad de crecimiento financiero!'
    }
]

const Testimonios = () => {
    return (
        <section className={sass.fondo}>
            <div className={`contenedor ${sass.grid}`}>
                <figure className={sass.imagen}></figure>

                <div>
                    
                    <div className={sass.introduccion}>
                        <h2 className="nombre-seccion">Testimonios</h2>
                        <p className={sass.frase}>Queremos compartir contigo las experiencias y opiniones de nuestros valiosos clientes.</p>
                    </div>

                    <Carrusel
                        testimonios={testimonios}
                    />

                </div>
            </div>
        </section>
    )
}

export default Testimonios