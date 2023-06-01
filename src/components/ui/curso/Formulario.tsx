import sass from "../../../styles/sass/curso/Formulario.module.scss";

const Formulario = () => {
    return (
        <div className={sass.seccion}>
            <h2>Deseo inscribirme</h2>

            <form 
                action=""
                className={sass.formulario}
            >
                <input 
                    type="text"
                    placeholder="Nombre"
                />
                
                <input 
                    type="email"
                    placeholder="Email"
                />

                <input 
                    type="number" 
                    placeholder="Teléfono" 
                />

                <select 
                    name="" 
                    id=""
                >
                    <option value="">-- Seleccionar Modalidad --</option>
                    <option value="1">Presencial</option>
                    <option value="2">E-learning</option>
                    <option value="3">Zoom</option>
                </select>

                <div className={sass.mensaje}>
                    <label htmlFor="mensaje">Opcional</label>
                    <textarea
                        id="mensaje"
                        placeholder="Escribe tu mensaje (Opcional)" 
                    ></textarea>
                </div>

                <div className={sass.submit}>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Formulario