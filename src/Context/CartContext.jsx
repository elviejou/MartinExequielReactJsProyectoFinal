import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {
    //estados y funciones globales
    const [listaCarrito, setListaCarrito] = useState([])

    const isInCart = (id) => listaCarrito.findIndex(producto => producto.id === id)

    const agregarAlCarrito = (nuevoProductoCarrito) => {
        let i = isInCart(nuevoProductoCarrito.id)
        if (i != -1 ) {
            listaCarrito[i].cantidadAgregada += nuevoProductoCarrito.cantidadAgregada
            setListaCarrito( [...listaCarrito])
        } else {
            setListaCarrito( [...listaCarrito, nuevoProductoCarrito ])
        }

        }



        
    const vaciarCarrito = () => {
        setListaCarrito([])
    }

    const cantidadTotal = () =>{
        return listaCarrito.reduce( (cantidadTotal, producto) => cantidadTotal += producto.cantidadAgregada, 0)
    }
    const precioTotal = () =>{
        return listaCarrito.reduce( (totalCarrito, producto) => totalCarrito += (producto.cantidadAgregada*producto.precio), 0)
    }
    const eliminarProducto = (id) =>{
        setListaCarrito(listaCarrito.filter (producto=> producto.id != id))
    }


    return(
        <CartContext.Provider value={{
            listaCarrito, // estado
            agregarAlCarrito, // función para modificar el estado
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
