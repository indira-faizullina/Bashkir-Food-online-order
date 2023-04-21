import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
  const formattedPrice = `${props.price} руб.`
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <MealItemForm id={props.id} />
    </li>
  )
}

export default MealItem
