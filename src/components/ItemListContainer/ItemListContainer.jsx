import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import BoltLoader from '../../utils/boltloader'

const ItemListContainer = ({}) => {  
    const [ productos, setProductos ] = useState([])   
    const [ loading, setLoading ] = useState(true)
    const { productoId } = useParams()
    

        const traerProductos = () => {
            const db = getFirestore()
            const queryCollection = collection(db, 'productostienda')
            const queryFiltrada = productoId ? query(queryCollection, where('categoria', '==', productoId))  
                : queryCollection               
            getDocs(queryFiltrada)
            .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ))) 
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

    useEffect(() => {
        traerProductos()
    },[productoId])    


    return (


        loading 
            ? 
            <div className='loaderRayo'>
                <BoltLoader
                    boltColor={"#ff0000"}
                    backgroundBlurColor={"#E0E7FF"}
                />
            </div>     
            :

                <div className='contenedorProductos'>
                <ItemList productos={productos}/>     
                    
                </div>
    )
}


export default ItemListContainer