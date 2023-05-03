import { ReactNode, FC } from "react";
import Head from "next/head";

import { Navegacion, Footer } from "../ui/navegacion";

type Props = {
    children: ReactNode;
    titulo: string;
    descripcion?: string
}

const LayoutPage: FC<Props> = ({children, titulo, descripcion}) => {
    return (
        <>
            <Head>
                <title>{titulo}</title>
                <meta name="author" content="Omar Alfredo Noyola Monroy" />
                <meta name="description" content={descripcion}/>
                <meta name="keywords" content="Ceffan, cursos, e-learning, finanzas, contabilidad, recursos humanos, blog finanzas" />
            </Head>

            <Navegacion/>

            <main>
                {children}
            </main>

            <Footer/>
        </>
    )
}

export default LayoutPage