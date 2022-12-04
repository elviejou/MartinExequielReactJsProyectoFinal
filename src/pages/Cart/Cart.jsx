import { useCartContext } from "../../components/Context/CartContext"



const Cart = () => {

const { cartList } = useCartContext()
  
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {cartList.map((producto) => <li key={producto.id}>
                                         {producto.descripcion} - {producto.cantidad}
                                        </li>
        )}
     </ul>

    </div>
  )
}

export default Cart