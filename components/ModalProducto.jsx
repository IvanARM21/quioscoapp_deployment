import { useState, useEffect } from 'react'
import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers"

const ModalProducto = () => {
    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco();
    const [cantidad, setCantidad] = useState(1);
    const [edicion, setEdicion] = useState(false);

    useEffect(() => {
        // Comprobar si el Modal Actual esta en el pedido
        if(pedido.some(pedidoState => pedidoState.id === producto.id)) {
            const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    }, [producto, pedido])

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image 
                width={300}
                height={400}
                alt={`Imagen producto ${producto?.nombre}`}
                src={`/assets/img/${producto?.imagen}.jpg`}
            />
        </div>

        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button onClick={handleChangeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-red-600">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
                </svg>

                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
            <p className="mt-5 font-black text-5xl text-amber-500">{formatearDinero(producto.precio)}</p>

            <div className="flex gap-4 mt-5 items-center">
                <button
                    type="button"
                    onClick={() => {
                        if(cantidad <= 1) return
                        setCantidad(cantidad - 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                
                <p className="text-2xl">{cantidad}</p>

                <button
                    type="button"
                    onClick={() => {
                        if(cantidad >= 10) return
                        setCantidad(cantidad + 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>

            <button
                type="button"
                onClick={() => handleAgregarPedido({...producto, cantidad})}
                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
            >
                {edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
            </button>
        </div>
    </div>
  )
}

export default ModalProducto

