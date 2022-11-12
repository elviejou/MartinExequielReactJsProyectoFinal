import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productosTienda } from '../../utils/productosTienda'



const ItemListContainer = (productos) => {  
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    useEffect(()=> {
        if (productos.id) {
            productosTienda()
            .then(resp =>  setProducts(resp.filter(producto => producto.id === id)))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
            
        }else{
            productosTienda()
            .then(resp =>  setProducts(resp))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
        }
        
        
    }, [categoriaId])
    

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
// los eventos me disparan una nueva ejecución del componente donde se esta ejecutando 

export default ItemListContainer
