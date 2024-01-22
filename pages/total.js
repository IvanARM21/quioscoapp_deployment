import { useCallback, useEffect } from "react"   
import Layout from "../layout/Layout"
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Total() {

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    }, [pedido, nombre])

    useEffect(() => {
        comprobarPedido();
    }, [pedido, comprobarPedido])

    return (
        <Layout pagina='Total y Confirmar tu Pedido'>
            <h1 className="text-4xl font-black">Total</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>
            
            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label 
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-bold text-xk">
                        Nombre
                    </label>
                    <input 
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mt-10">
                    <p className="text-2xl">Total a pagar {''} <span className="text-2xl font-black text-indigo-600">{formatearDinero(total)}</span></p>
                </div>
                
                <div>
                    <input
                        type="submit"
                        className={` ${comprobarPedido() ? 'bg-indigo-300 cursor-no-drop' : 'bg-indigo-600 hover:bg-indigo-800 cursor-pointer'} transition-colors mt-5 text-center w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white`}
                        value="Confirmar Pedido"
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}