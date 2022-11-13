import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productosTienda } from '../../utils/productosTienda'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = (listaProductos) => {  
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {productoId} = useParams()

    useEffect(()=> {
        if (productoId) {
            productosTienda()
            .then(resp =>  setProductos(resp.filter(producto => producto.categoria === productoId)))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
            
        }else{
            productosTienda()
            .then(resp =>  setProductos(resp))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
        }
        
        
    }, [productoId])
    

    return (
                <div className='contenedorProductos'>
                <ItemList productos={productos}/>     
                    
                </div>
    )
}
// los eventos me disparan una nueva ejecución del componente donde se esta ejecutando 

export default ItemListContainer