import { LayoutPage } from "@/components/layouts";
import { Header, ContenidoCurso } from "@/components/ui/curso";

const Curso = () => {
    return (
        <LayoutPage
            titulo="Curso"
        >
            <Header/>
            <ContenidoCurso/>
        </LayoutPage>
    )
}

export default Curso