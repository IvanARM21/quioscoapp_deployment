import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';

const Categoria = ({categoria}) => {

    const { categoriaActual, handleClickCategoria } = useQuiosco();

    const { nombre, icono, id } = categoria;
  return (
    <button 
        type="button"
        onClick={() => handleClickCategoria(id)}
        className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt={`Imagen Icono ${nombre}`}
      />

      <p className="text-2xl font-bold hover:cursor-pointer">
        {nombre}
      </p>
    </button>
  )
}

export default Categoria
