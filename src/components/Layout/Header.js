import styles from './Header.module.css'
import React, { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'
import headerImg from '../../assets/header-img.jpg'

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Башкирская кухня</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={headerImg} alt="Блюда башкирской кухни" />
      </div>
    </Fragment>
  )
}

export default Header
