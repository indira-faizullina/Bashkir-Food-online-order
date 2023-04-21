import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: '1', name: 'hkjhk', amount: 2, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal className={styles['cart-items']} onClick={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>42.42</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button_alt} onClick={props.onCloseCart}>
          Закрыть
        </button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  )
}

export default Cart
