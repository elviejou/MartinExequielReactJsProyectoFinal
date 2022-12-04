import { memo, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import productosTienda from '../../utils/productosTienda'
import Item from '../Item/Item'

const ItemList = memo( ({productos}) => {
  return (
    productos.map( listaProductos =>  <Item key={listaProductos.id} listaProductos={listaProductos} />  )
  )
}
)
export default ItemList
