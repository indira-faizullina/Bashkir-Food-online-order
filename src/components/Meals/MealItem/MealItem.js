import styles from './MealItem.module.css'
import { useContext } from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const cartContext = useContext(CartContext)
  const formattedPrice = `${props.price} руб.`

  const addToCardHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <MealItemForm onAddToCart={addToCardHandler} id={props.id} />
    </li>
  )
}

export default MealItem
