import styles from './MealList.module.css'

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

const mealsListLiNodes = inStockMeals.map((meal) => <li>{meal.name}</li>)

const MealList = (props) => {
  return (
    <section className={styles.meals}>
      <ul>{mealsListLiNodes}</ul>
    </section>
  )
}

export default MealList
