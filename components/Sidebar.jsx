import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria";

export default function Sidebar() {
  const { categorias } = useQuiosco();
  return (
    <>
        <Image className="mx-auto my-auto" width={200} height={200} src="/assets/img/logo.svg" alt="Imagen LogoTipo" />

        
        <nav className="mt-10">
          {categorias.map(categoria => (
            <Categoria
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </nav>
    </>
  )
}
