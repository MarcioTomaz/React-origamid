

import React from 'react'
import styles from './Produto.module.css'

const Produto = () => {
  console.log(styles)
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.precoTotal}>Preço: 1</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  )
}

export default Produto