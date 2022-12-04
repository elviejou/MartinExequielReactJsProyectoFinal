import { createContext, useState, useContext } from "react";


const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext) 

const CartContextProvider = ({ children }) =>{
    //Funciones y Estados Globales
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (nuevoProductoCarrito) => {
        setCartList( [...cartList, nuevoProductoCarrito] )
    }

    return(
        <CartContext.Provider value = {{
            cartList,
            agregarAlCarrito
        }}>
        { children }
        </CartContext.Provider>        
    )
}
export default CartContextProvider