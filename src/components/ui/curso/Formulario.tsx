import style from "../../../styles/curso/Formulario.module.css";

const Formulario = () => {
    return (
        <form 
            className={style.formulario}
        >
            <div className={style.grid}>
                <input
                    id="nombre"
                    name='nombre' 
                    type="text" 
                    placeholder='Nombre'
                />
                
                <input
                    id="curso"
                    name='curso' 
                    type="text" 
                    placeholder='Curso de Interes'
                />
                
                <input
                    id="modalidad"
                    name='modalidad' 
                    type="text" 
                    placeholder='Modalidad'
                />
                
                <input
                    id="email"
                    name='email' 
                    type="email" 
                    placeholder='Email'
                />
                
                <input
                    id="numero"
                    name='numero' 
                    type="number" 
                    placeholder='Teléfono'
                />

                <div className={style.textarea}>
                    <label htmlFor="mensaje">Opcional</label>
                    <textarea name="mensaje" id="mensaje" placeholder='Mensaje' wrap="hard"></textarea>
                </div>
            </div>

            <div className={style.submit}>
                <input 
                    type="submit" 
                    value="Enviar"
                    disabled 
                />
            </div>
        </form>
    )
}

export default Formulario