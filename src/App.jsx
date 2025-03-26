
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import ProductsDetails from './pages/ProductsDetails'
import Navbar from './components/Navbar'

import { Provider } from 'react-redux'
import { store } from './App/Store'



const App = () => {
 

  return (
   
   
      <Provider store={store}>
      <BrowserRouter>
       
          <Navbar/>
       
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:id' element={<ProductsDetails/>} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
  
        </BrowserRouter>
      </Provider>
    
   
  )
}

export default App
