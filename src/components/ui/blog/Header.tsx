import sass from "../../../styles/sass/blog/Header.module.scss";

const Header = () => {
    return (
        <header className={sass.header}>
            <h2 className={sass.pagina}>Blog</h2>
            <h1 className={sass.titulo}>Consejos, estrategias y noticias</h1>
        </header>
    )
}

export default Header