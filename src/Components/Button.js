import React from 'react'
import styles from './Pages/Destination/destination.module.css'

const Button = ({title}) => {
  return (
    <div className={styles.buttons}>
      <button  type='button' className={styles.btn}>{title}</button>    
    </div>
  )
}

export default Button