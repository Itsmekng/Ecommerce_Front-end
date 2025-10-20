import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ContactUs from './components/ContactUs.jsx'
import Single_product from './components/Single_product.jsx'
import Shop_page from './components/Shop_page.jsx'
import Login from './components/Login.jsx'
import Checkout from './components/Liked.jsx'
import Cart from './components/cart.jsx'
import Register from './components/Register.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/ContactUs" element={<ContactUs />}></Route>
          <Route exact path="/single_product" element={<Single_product />}></Route>
          <Route exact path="/shop_page" element={<Shop_page />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/liked" element={<Checkout />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
  </StrictMode>,
)
