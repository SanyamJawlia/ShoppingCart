import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Cart from "./Components/Cart.js";


import "./Styles/app.scss"
import "./Styles/header.scss";
import "./Styles/home.scss";
import "./Styles/cart.scss";
import "./Styles/mediaquery.scss"

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App
