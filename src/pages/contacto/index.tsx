import { LayoutPage } from "@/components/layouts";
import sass from "../../styles/sass/contacto/Grid.module.scss";

const PaginaContacto = () => {
    return (
        <LayoutPage
            titulo="Ceffan | Contacto"
        >
            <main className={sass.seccion}>
                <div className={`contenedor ${sass.grid}`}>
                    <div className={sass.contactos}>
                        <h1>Contáctanos</h1>
                        <p className={sass.frase}>
                            Nos esforzamos por construir una comunidad sólida y enriquecedora, y tu retroalimentación nos ayuda a lograrlo. ¡Esperamos con ansias escuchar de ti!
                        </p>

                        <div className={sass.redes}>
                            <i className='bx bxl-facebook' ></i>
                            <i className='bx bxl-instagram' ></i>
                            <i className='bx bxl-whatsapp' ></i>
                        </div>

                        <div className={sass.mensaje}>
                            <p className={sass.titulo}>
                                Estamos comprometidos en brindarte la mejor experiencia posible y responder a tus inquietudes.
                            </p>

                            <p className={sass.parrafo}>
                                Puedes comunicarte con nosotros a través del formulario de contacto, enviarnos un correo electrónico o seguirnos en nuestras redes sociales para estar al tanto de las últimas novedades y consejos financieros.
                            </p>
                        </div>
                        
                        <div className={sass.medios}>
                            <div className={sass.icono}>
                                <i className='bx bx-phone'></i>
                            </div>

                            <div>
                                <p className={sass.medio}>Teléfono</p>
                                <p>5589511281</p>
                                <p>5589511395</p>
                                <p>5592252886</p>
                            </div>
                        </div>
                        
                        <div className={sass.medios}>
                            <div className={sass.icono}>
                                <i className='bx bx-envelope' ></i>
                            </div>

                            <div>
                                <p className={sass.medio}>Email</p>
                                <p>contacto@ceffan.com.mx</p>
                            </div>
                        </div>
                    </div>

                    <div className={sass.formulario}>
                        <h3>¡Nos encantaría escuchar de ti!</h3>
                        <p>
                            ¡Completa el formulario de contacto a continuación y nos pondremos en contacto contigo a la brevedad!
                        </p>

                        <form action="">
                            <div>
                                <label htmlFor="nombre">Nombre:</label>
                                <input 
                                    type="text" 
                                    id="nombre" 
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                />
                            </div>

                            <div>
                                <label htmlFor="telefono">Teléfono:</label>
                                <input 
                                    type="number" 
                                    id="telefono" 
                                />
                            </div>

                            <div>
                                <label htmlFor="asunto">Asunto:</label>
                                <input 
                                    type="text" 
                                    id="asunto" 
                                />
                            </div>

                            <div>
                                <label htmlFor="mensaje">Mensaje:</label>
                                <textarea id="mensaje" ></textarea>
                            </div>

                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </main>
        </LayoutPage>
    )
}

export default PaginaContacto