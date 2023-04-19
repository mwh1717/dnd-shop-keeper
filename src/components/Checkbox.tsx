import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';

interface Details {
  text: string;
  id: string;
}

const Checkbox = (props: Details) => {

  const [checkboxState, setCheckboxState] = useState<{ [key: string]: boolean }>({});

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const checkboxId = event.target.id;
    const isChecked = event.target.checked
    setCheckboxState(() => ({
      
      [checkboxId]: isChecked
    }));

    console.log(checkboxState);
  }

  return (
    <div className='checkbox-wrapper'>
      <label className='text-2xl'>
        <input className='mr-2 w-5 h-5' id={`${props.id}`}
        type="checkbox" checked={checkboxState[props.id]} onChange={handleCheckboxChange}/>
        {props.text}
      </label>
    </div>
  )
}

export default Checkbox