import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { productosTienda } from '../../utils/productosTienda'


const ItemDetail = ({producto}) => {
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
                    </center>
                </div>
            
            
                <div className='agregarCarritoDetalle' > 
                <div className='cantidadAgregarCarrito'>
                    <center>
                        <input type='button' value='-' className='cantidadMenos' field='quantity'/>
                        <input type='text' name='cantidad' className='cantidadAgregar'/>
                        <input type='button' value='+' className='cantidadMas' field='quantity'/>
                    </center>                                                       
                </div>    
                <div>
                    <button className="botonAgregarAlCarrito">Agregar</button>
                </div>
                </div>
            </div>
        </div>
  )
}

export default ItemDetail