import sass from "../../../styles/sass/entradaBlog/Header.module.scss";

const Header = () => {
    return (
        <header className={sass.header}>
            <h1 className={sass.titulo}>
                ¿Cómo se hace un presupuesto y para que sirve?
            </h1>
            <div className={sass.metadatos}>
                <p>Fererico Martinez</p>
                <p>25 de Mayo de 2023</p>
                <p>0 Comentarios</p>
            </div>
        </header>
    )
}

export default Header