import {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import BoltLoader from '../../utils/boltloader'



const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()
  

  useEffect(() => {
      const db = getFirestore()
      const queryDb = doc(db, 'productostienda', productId)
      getDoc(queryDb)
      .then(doc => setProducto( { id: doc.id, ...doc.data() } ))
      .catch(err => console.log(err))
      .finally(()=>setLoading(false))
  },[productId])


return (
 
  loading 
  ? 
  <div className='loaderRayo'>
      <BoltLoader
          boltColor={"#ff0000"}
          backgroundBlurColor={"#E0E7FF"}
      />
  </div>     
  : <ItemDetail producto={producto} />

        
 
)
}

export default ItemDetailContainer