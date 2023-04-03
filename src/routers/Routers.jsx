import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import ProductDetails from '../Pages/ProductDetails'
import Shop from '../Pages//Shop'
import Error from '../Pages/Error'


const Routers = () => {
  return (
    <>
    <Routes>
      <Route path='maltimart'  element={<Error />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
    </Routes>
    </>
  )
}

export default Routers
