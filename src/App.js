import React from 'react'
import Home from './Home'
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
 
  return (
    <div>
      <CartProvider>
      <Router>
      <Routes>
     
       
         <Route path="/" element={<Home />}/>
         <Route path="/cart" element={<Cart />} />
      
        
       </Routes>
       </Router>
       </CartProvider>

    </div>
  )
}

export default App
