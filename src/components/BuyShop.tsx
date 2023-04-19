import React from 'react';
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { useContext } from 'react';
import { CheckboxContext } from '@/components/Checkbox';

interface Item {
  index: string;
  name: string;
  url: string;
  rarity: { name: string };
  desc: [ string ];
}

function RandomMagicItems() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      const allItemsResult = await fetch('https://www.dnd5eapi.co/api/magic-items');
      const allData: { results: Item[] } = await allItemsResult.json();
      const dataArray: Item[] = allData.results;

      const randomItems: Item[] = [];
      for (let i = 0; i < 6; i++) {
        const randomIndex: number = Math.floor(Math.random() * dataArray.length);
        const chosenItem = dataArray[randomIndex];
        const singleItemResult = await fetch(`https://www.dnd5eapi.co${chosenItem.url}`);
        const singleData = await singleItemResult.json();
        randomItems.push(singleData);
      }
      setItems(randomItems);
    }

    fetchData();
  }, []);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <ItemCard {...item} />
        </li>
      ))}
    </ul>
  );
}


const BuyShop = () => {

  const test = useContext(CheckboxContext);
  console.log('status:', test);

  return (
    <div className='cards-wrapper'>
      <RandomMagicItems />
    </div>
  )
}

export default BuyShop;