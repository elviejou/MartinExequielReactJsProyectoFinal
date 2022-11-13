import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import {productosTienda} from '../../utils/productosTienda'

const ItemDetailContainer = () => {
const [producto, setProducto] = useState({})
const {productId} = useParams()

useEffect(()=> {
       productosTienda(productId)
      .then(resp => setProducto(resp))          
  },[])

  console.log(producto)
  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
