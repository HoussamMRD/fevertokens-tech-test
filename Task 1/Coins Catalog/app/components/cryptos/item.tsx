import React from 'react'
import styles from './item.module.css'

const Item = () => {
  return (
    <div className={styles.title}>
      <div className='flex flex-row justify-between items-center rounded-lg fint-bold mx-4 p-5 text-xl font-medium'>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className='hide-mobile'>24h-Volume</p>
        <p className='hide-mobile'>Market-Cap</p>
      </div>
    </div>
  )
}

export default Item