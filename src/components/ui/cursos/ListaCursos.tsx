import { Card } from "./";
import style from "../../../styles/cursos/ListaCursos.module.css";

const ListaCursos = () => {
    return (
        <section className={style.seccion}>
            <div className={style.grid}>
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
            </div>
        </section>
    )
}

export default ListaCursos