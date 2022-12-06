import React from 'react'
import Cantidad from '../Cantidad/Cantidad'
import { useCartContext } from "../../Context/CartContext"
import { useState } from 'react'

const ItemDetail = ({producto}) => {
    const [cantidad, setCantidad] = useState(true)
    const {listaCarrito, agregarAlCarrito} = useCartContext()
    const onAdd = (cantidadAgregada) => {
        agregarAlCarrito({...producto, cantidadAgregada})
    }
  return (
        <div className='detalleProducto'>
            <img src={producto.imagen} className="imagenItem"  /><br />
            <div className='productoDetalle'>
            
                <div className='nombreProductoDetalle'>
                    {producto.descripcion}
                </div>
                <div className='precioProductoDetalle'>
                    <center>
                          ${producto.precio} IVA inc*
                         
                    </center>
                </div>
                <div className='skuProductoDetalle'>
                    <center>
                         <h6>Código: {producto.codigo} </h6>
                         {producto.categoria}
                    </center>
                </div> 
                <Cantidad stock={10} inicial={1} onAdd={onAdd} />    
            </div>
        </div>
  )
}

export default ItemDetail