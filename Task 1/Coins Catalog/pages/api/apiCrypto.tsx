import React from 'react'

const apiCrypto = async (page : number,perPage:number) => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&locale=en`,
        { method: 'GET' },
    )
    return res.json();

}

export default apiCrypto