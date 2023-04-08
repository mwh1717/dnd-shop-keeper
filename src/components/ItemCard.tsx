import React, { useRef } from 'react';

interface Details {
  index: string;
  name: string;
  url: string;
  rarity: { name: string };
  desc: [ string ];
}

const ItemCard = (props: Details) => {

  const ref = useRef<HTMLDivElement>(null);
  const itemName = props.rarity.name;

  const handleClick = () => {
    const ele = ref.current;
    if (ele) ele.remove();
  }

  return (
    <div className={`item-card flex flex-col text-center items-center mb-5 p-5 border-4 rounded shadow-lg shadow-gray-300
      ${itemName === 'Uncommon' ? 'border-green-400' :
      itemName === 'Rare' ? 'border-blue-500 shadow' :
      itemName === 'Very Rare' ? 'border-purple-500' :
      itemName === 'Legendary' ? 'border-orange-400' :
      'border-gray-400'
      }`}
      ref={ref}
    >
      <div className='text-2xl'>{props.name}</div>
      {props.desc.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <button
        className='rounded text-white bg-yellow-600 py-2 md:py-3 px-10 m-2 hover:bg-red-400'
        onClick={handleClick}
      >
        Purchase
      </button>
    </div>
  )
}

export default ItemCard;