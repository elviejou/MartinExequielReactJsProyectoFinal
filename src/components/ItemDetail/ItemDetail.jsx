import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { productosTienda } from '../../utils/productosTienda'
import Cantidad from '../Cantidad/Cantidad'

const ItemDetail = ({producto}) => {
    const onAdd = (cantidadAgregada) => {
        console.log(cantidadAgregada)
    }
  return (
        <div className='detalleProducto'>
            <img src={producto.imagen} className="w-50"  /><br />
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