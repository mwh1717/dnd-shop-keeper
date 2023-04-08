import Head from 'next/head'
import BuyShop from '@/components/BuyShop'

const instructionsAndShopSmall = 'border-4 border-black rounded w-11/12 p-5 mb-5'

export default function Home() {
  return (
    <>
      <Head>
        <title>DnD 5e Shopkeeper</title>
        <meta name="description" content="DnD 5e Shopkeeper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col items-center pt-10'>
        <div className={`instructions text-2xl ${instructionsAndShopSmall}`}>
        Greetings, weary travelers! Welcome to my humble shop. I have a wide range of magical items that you might find useful during your journey.
        Choose quickly though, my wares change often!
        I also offer fair prices for any goods that you may want to sell. Do you have anything to trade?
        Allow me to take a look and assess a fair trade.
        </div>
        <div className='w-11/12'>
          <BuyShop />
        </div>
      </main>
    </>
  )
}
