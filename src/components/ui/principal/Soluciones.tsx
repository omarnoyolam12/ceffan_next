import { ListaSoluciones } from "./";
import sass from "../../../styles/sass/principal/Soluciones.module.scss";

const solucionesInfo = [
    {
        titulo: 'Elearning a la medida',
        info: 'Creamos cursos e-learning a la medida mediante una metodología basada en el diseño pedagógico útil para la vida, que sirve como organizador en cada desarrollo.',
        icono: 'bx bx-laptop'
    },
    {
        titulo: 'Gestión de la capacitación',
        info: 'Colaboramos con las organizaciones gestionando sus planes de Capacitación que les permitan ejecutar satisfactoria y eficazmente sus Planes Anuales de Capacitación.',
        icono: 'bx bxs-book-reader'
    },
    {
        titulo: 'Formación presencial',
        info: 'Si tienes un contenido que no tengas claro cómo organizar para lograr tus objetivos de aprendizaje,nosotros diseñamos herramientas didácticas y disruptivas para potenciar tus alcances.',
        icono: 'bx bxs-graduation'
    },
    {
        titulo: 'Diseño Instruccional',
        info: 'Llevamos a cabo la organización didáctica de la información tomando como base tu contenido, estructurando cada material de tal forma que se encuentren alineados a los objetivos de la compañía.',
        icono: 'bx bxs-edit-alt'
    }
]


const Soluciones = () => {
    
    return (
        <section className={`contenedor ${sass.seccion}`}>
            <div className={sass.descripcion}>
                <h2 className="nombre-seccion">Soluciones</h2>
                <p className={sass.encabezado}>Nos esforzamos por comprender a fondo tus necesidades y prioridades</p>
                <p className={sass.frase}>Comprendemos que cada cliente tiene necesidades y objetivos únicos. Es por eso que hemos desarrollado una amplia gama de soluciones diseñadas específicamente para abordar tus desafíos y ayudarte a alcanzar el éxito.</p>
            </div>

            <div className={sass.soluciones}>
                {solucionesInfo.map(solucion=>(
                    <ListaSoluciones
                        key={solucion.titulo}
                        solucion={solucion}
                    />
                ))}
            </div>
        </section>
    )
}

export default Soluciones