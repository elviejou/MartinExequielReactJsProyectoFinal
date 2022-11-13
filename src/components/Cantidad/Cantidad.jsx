import React from 'react'
import { useEffect, useState } from 'react'

const Cantidad = ({ inicial=1, stock=100, onAdd }) => {
    const[cantidad, setCantidad] = useState(inicial)
    const suma = () => {
        if (cantidad < stock)
            setCantidad(cantidad + 1)
    }
    const resta = () => {
        if (cantidad > inicial)
            setCantidad(cantidad - 1)
    }
    const addCantidad = () => {
        onAdd(cantidad)
    }
  return (
    <div className='agregarCarritoDetalle' > 
                <div className='cantidadAgregarCarrito'>
                    <center>
                        <input type='button' value='-' className='cantidadMenos' onClick={resta}/>
                        <label className='cantidadAgregar' > {cantidad} </label>
                        <input type='button' value='+' className='cantidadMas' onClick={suma}/>
                    </center>                                                       
                </div>    
                <div>
                    <button className="botonAgregarAlCarrito" onClick={addCantidad}>Agregar</button>
                </div>
                </div>
  )
}

export default Cantidad