import styles from './Modal.module.css'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
  const portalNode = document.getElementById('overlays')

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={props.onClick}></div>,
        portalNode
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal}>
          <div className={styles.content}>{props.children}</div>
        </div>,
        portalNode
      )}
    </Fragment>
  )
}

export default Modal
