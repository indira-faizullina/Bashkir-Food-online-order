import styles from './Cart.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartContext = useContext(CartContext)

  const totalAmount = `${cartContext.totalAmount} руб`
  const hasItems = cartContext.items.length > 0

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id)
  }

  const addCartItemHandler = (item) => {
    cartContext.addItem({
      ...item,
      amount: 1,
    })
  }

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  )

  return (
    <Modal className={styles['cart-items']} onClick={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button_alt} onClick={props.onCloseCart}>
          Закрыть
        </button>
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  )
}

export default Cart
