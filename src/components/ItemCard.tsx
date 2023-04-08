import React from 'react';

interface Details {
  name: string;
  rarity: { name: string }[];
  desc: [string];
}


const ItemCard = (props: Details) => {

  return (
    <div className={`item-card flex flex-col text-center items-center mb-5 p-5 border-4 rounded shadow-lg shadow-gray-300
    ${props.rarity.name === 'Uncommon' ? 'border-green-400' :
    props.rarity.name === 'Rare' ? 'border-blue-500 shadow' :
    props.rarity.name === 'Very Rare' ? 'border-purple-500' :
    props.rarity.name === 'Legendary' ? 'border-orange-400' :
    'border-gray-400'
  }
    `}>
      <div className='text-2xl'>{props.name}</div>
      <div>{props.rarity.name}</div>
      {props.desc.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <button className='rounded text-white bg-yellow-600 py-2 md:py-3 px-10 m-2 hover:bg-red-400'>Purchase</button>
    </div>
  )
}

export default ItemCard;