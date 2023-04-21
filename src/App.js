import React, { Fragment, useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const showCartHandler = () => {
    setIsCartVisible(true)
  }

  const closeCartHandler = () => {
    setIsCartVisible(false)
  }

  return (
    <Fragment>
      {isCartVisible && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </Fragment>
  )
}

export default App
