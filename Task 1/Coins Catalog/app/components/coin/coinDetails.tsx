import { useRouter } from 'next/router';
import React from 'react'


const getDetails = async (nameCoin: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${nameCoin}`
  )

  return res.json();
}
const CoinDetails = (props: any) => {
  return (
    <>
      <div>Coin-Details</div>
      {console.log(props.id)}
    </>
  )
}

export default CoinDetails