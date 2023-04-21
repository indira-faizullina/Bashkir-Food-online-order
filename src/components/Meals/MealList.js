import styles from './MealList.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const inStockMeals = [
  {
    id: '1',
    name: 'Бишбармак',
    description:
      'Баранина, бульон, салма (лапша), репчатый лук, зелёный лук, лавровый лист, перец',
    price: 600,
  },
  {
    id: '2',
    name: 'Элеш',
    description: 'Суп на основе конины и овощей',
    price: 570,
  },
  {
    id: '3',
    name: 'Учпочмак',
    description: 'Треугольная выпечка с начинкой из говядины и картошки',
    price: 120,
  },
  {
    id: '4',
    name: 'Чак-чак домашний',
    description: 'Сладкий десерт из теста с башкирским мёдом',
    price: 320,
  },
]

const mealsListLiNodes = inStockMeals.map((meal) => (
  <MealItem
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />
))

const MealList = (props) => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsListLiNodes}</ul>
      </Card>
    </section>
  )
}

export default MealList
