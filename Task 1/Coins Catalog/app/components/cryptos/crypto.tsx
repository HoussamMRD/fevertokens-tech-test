'use client'
import React, { useEffect, useState } from 'react'
import styles from './crypto.module.css'
import Link from 'next/link';
import Item from './item'


async function getData() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`,
  )

  return res.json();
}

export const CryptoPage = async () => {

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const crypto: Coin[] = await getData();

  return (
    <>
      <Item></Item>
      {crypto.map(coin => (
        <Link href={`/coin/${coin.id}`} key={coin.id}>
          <div className={styles.row}>
            <div className='flex flex-row justify-between items-center rounded-lg fint-bold mx-4'>
              <p><span className={styles.coin}><img className={styles.img} src={coin.image} /></span> {coin.name} {coin.symbol.toUpperCase()}</p>
              <p>{coin.current_price.toLocaleString()} </p>
              <p>{coin.price_change_24h.toFixed(2)} </p>
              <p>{coin.total_volume.toLocaleString()} </p>
              <p>{coin.market_cap.toLocaleString()} </p>
              
            </div>
          </div>
        </Link>
      ))}
      <div className='flex items-center justify-center'>
        <button
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1 ? true : false}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'
        >Prev</button>
        <p className='text-lg font-bold'>{page}</p>
        <button
          onClick={() => setPage((page) => page + 1)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'
        >Next</button>
      </div>

    </>

  )
}