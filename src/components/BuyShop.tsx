import React from 'react';
import { useState, useEffect } from 'react';

interface Item {
  index: string;
  name: string;
  url: string;
}

function RandomMagicItems() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      const allItemsResult = await fetch('https://www.dnd5eapi.co/api/magic-items');
      const allData: { results: Item[] } = await allItemsResult.json();
      const dataArray: Item[] = allData.results;

      const randomItems: Item[] = [];
      for (let i = 0; i < 5; i++) {
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
    <div>
      <h2>Random Magic Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}


const BuyShop = () => {

  return (
    <div className=''>
      <RandomMagicItems />
    </div>
  )
}

export default BuyShop;