import { Card } from "./";
import sass from "../../../styles/sass/cursos/Grid.module.scss";

const ListaCursos = () => {
    return (
        <section className={`contenedor ${sass.layout}`}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
    )
}

export default ListaCursos