import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    // llamada a la api para un producto en particular
    // guardar en un estado el producto

    const {productId} = useParams()
    console.log(productId)
  return (
    <div>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer