import React from 'react'
import { Link, useParams } from 'react-router-dom'
import productosTienda from '../../utils/productosTienda'
import Cantidad from '../Cantidad/Cantidad'

const Item = ({listaProductos}) => {
    const onAdd = (cantidadAgregada) => {
        console.log(cantidadAgregada)
    }
  return (
    <div className='tarjeta2'>
                                                <Link to={`/detail/${listaProductos.id}`}>
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
                                                             <h6>Categoria: {listaProductos.categoria} </h6>
                                                        </center>
                                                    </div>
                                                </Link>
                                                
                                                <Cantidad stock={10} inicial={1} onAdd={onAdd} />         
                                                    
                                            </div>
  )
}

export default Item