import sass from "../../../styles/sass/cursos/Header.module.scss";

const Header = () => {
    return (
        <>
            <header className="contenedor">
                <div className={`${sass.header}`}>
                    <h1>    
                        Desarrolla Tu <span>Potencial</span> Con Nuestros <span>Cursos</span>.
                    </h1>
                    <p>
                        Sabemos que el mundo de las finanzas puede ser complejo y desafiante, pero estamos aquí para simplificarlo y ayudarte a tomar decisiones informadas y estratégicas.
                    </p>
                </div>

                <nav className={sass.navegacion}>
                    <ul>
                        <li>Todos</li>
                        <li>Contabilidad</li>
                        <li>Auditoría</li>
                        <li>Cadena de suministros</li>
                        <li>Recursos Humanos</li>
                    </ul>

                    <select className={sass.seleccionar} name="categoria" id="categoria">
                        <option value="">-- Seleccionar Categoría --</option>
                        <option value="">Todos</option>
                        <option value="Contabilidad">Contabilidad</option>
                        <option value="Auditoria">Auditoria</option>
                        <option value="Cadena de Suministros">Cadena de Suministros</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                    </select>

                    <div className={sass.botones}>
                        <i className='bx bx-search'></i>
                        <i className='bx bxs-grid'></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header