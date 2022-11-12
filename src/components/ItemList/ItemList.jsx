import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import productosTienda from '../../utils/productosTienda'

const ItemList = ({productos}) => {
  return (
    productos.map( listaProductos =>  <div key={listaProductos.id} className='tarjeta2'>
                                                <Link to={`/detail/${productos.id}`}>
                                                <img src={listaProductos.imagen} className="w-50"  /><br />
                                                    <div className='nombreProducto'>
                                                        {listaProductos.descripcion}
                                                    </div>
                                                    <div className='precioProducto'>
                                                        <center>
                                                             <h5> ${listaProductos.precio} IVA inc*</h5>
                                                             
                                                        </center>
                                                    </div>
                                                    <div className='skuProducto'>
                                                        <center>
                                                             <h6>Código: {listaProductos.codigo} </h6>
                                                        </center>
                                                    </div>
                                                </Link>
                                                <div className='agregarAlCarrito'>
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
                                            </div> )
  )
}

export default ItemList
