import React from 'react';
import { useState, createContext, useContext } from 'react';

interface Details {
  text: string;
  id: string;
  state: boolean
}

type CheckboxContextType = {
  [key: string]: boolean;
}

export const CheckboxContext = createContext<CheckboxContextType | null>(null);

const Checkbox = (props: Details) => {

  const [checkboxState, setCheckboxState] = useState<CheckboxContextType>({});

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const checkboxId = event.target.id;
    const isChecked = event.target.checked
    setCheckboxState(() => ({
      [checkboxId]: isChecked
    }));

    console.log(checkboxState)
  }

  return (
    <CheckboxContext.Provider value={checkboxState}>
      <div className='checkbox-wrapper pt-5'>
        <label className='text-2xl'>
          <input className='mr-2 w-5 h-5' id={`${props.id}`}
            type="checkbox" checked={checkboxState[props.id] || false} onChange={handleCheckboxChange} />
          {props.text}
        </label>
      </div>
    </CheckboxContext.Provider>
  )
}

export default Checkbox