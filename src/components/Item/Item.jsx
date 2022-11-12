import React from 'react'

const Item = ({ productos }) => {
  return (
    <div className='contenedorProductos'>
                        { products.map( productos =>  <div key={productos.id} className='tarjeta2'>
                                                <Link to={`/detail/${productos.id}`}>
                                                <img src={productos.imagen} className="w-50"  /><br />
                                                    <div className='nombreProducto'>
                                                        {productos.descripcion}
                                                    </div>
                                                    <div className='precioProducto'>
                                                        <center>
                                                             <h5> ${productos.precio} IVA inc*</h5>
                                                             
                                                        </center>
                                                    </div>
                                                    <div className='skuProducto'>
                                                        <center>
                                                             <h6>Código: {productos.codigo} </h6>
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
                                            </div> )  }     
                    
                </div>
  )
}

export default Item