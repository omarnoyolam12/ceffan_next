import { LayoutPage } from "@/components/layouts";
import { Hero, Nosotros, Soluciones, Cursos, Frase, PostRecientes, Testimonios } from "@/components/ui/principal";

export default function Home() {
  return (
    <>
      <LayoutPage
        titulo="Ceffan | Inicio"
        descripcion="Centro especializado en Capacitación Contable, Financiera y Administrativa"
      >
        <Hero/>
        <Nosotros/>
        <Soluciones/>
        <Frase/>
        <Cursos/>
        <Testimonios/>
        <PostRecientes/>

      </LayoutPage>
    </>
  )
}
