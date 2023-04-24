import React, { Fragment, useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartContextProvider from './store/CartContextProvider'

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const showCartHandler = () => {
    setIsCartVisible(true)
  }

  const closeCartHandler = () => {
    setIsCartVisible(false)
  }

  return (
    <CartContextProvider>
      {isCartVisible && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartContextProvider>
  )
}

export default App
