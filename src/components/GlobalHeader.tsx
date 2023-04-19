import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GlobalHeader = () => {

  const buttonCss = 'rounded bg-yellow-600 py-2 md:py-3 px-10 m-2 hover:bg-red-400'
  const disabled = 'rounded py-2 md:py-3 px-10 m-2 cursor-not-allowed bg-gray-200'

  return (
    <div className='global-header flex flex-col md:flex-row md:justify-between bg-yellow-950 shadow text-white w-full p-4'>
      <div className='flex justify-center text-5xl md:text-6xl'>
        <div className='relative w-16 md:w-24 md:h-20'>
        <Image
          src="/money-bag.png"
          alt="sack of coins"
          fill
          object-fit='contain'
          className=''
        />
        </div>
        <div className='md:flex md:items-center ml-2'>
          DnD 5e Fence
        </div>
      </div>
      <div className='flex justify-center text-xl md:text-3xl mt-1 md:mt-0'>
        <Link href='/' className={buttonCss}>Buy</Link>
        <Link href='/settings' className={buttonCss}>Settings</Link>
      </div>
    </div>
  )
}

export default GlobalHeader