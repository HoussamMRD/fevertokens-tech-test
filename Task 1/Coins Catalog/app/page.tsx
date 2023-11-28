import Image from 'next/image'
import Header from './components/UI/header'
import { CryptoPage } from './components/cryptos/crypto'

export default function Home() {
  return (
    <>
      <Header></Header>
      <CryptoPage></CryptoPage>
    </>
  )
}
