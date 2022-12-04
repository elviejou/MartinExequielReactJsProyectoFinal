import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartContextProvider , { useCartContext } from './Context/CartContext'



function App() {

    return (
        <BrowserRouter> 
            <CartContextProvider>
                <NavBar  />    
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/categoria/:productoId' element={<ItemListContainer />} />
                    <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                    <Route path='/cart'  element={<Cart />}/>
                    {/* <Route path='/404Notfound' element={<NotFound404 />} />   */}

                    <Route path='*' element={<Navigate to='/' />} />             
                </Routes>
                </CartContextProvider>
        </BrowserRouter>
    )
}
export default App






