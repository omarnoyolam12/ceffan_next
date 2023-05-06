import { LayoutPage } from "@/components/layouts";
import { Header, ListaCursos } from "@/components/ui/cursos";

const cursos = () => {
    return (
        <LayoutPage
            titulo="Ceffan | Cursos"
            descripcion="Cursos de finanzas, auditoría, recurso humanos, Cadena de suministros, online, presencial o e-learning"
        >
            <Header/>
            <ListaCursos/>
        </LayoutPage>
    )
}

export default cursos