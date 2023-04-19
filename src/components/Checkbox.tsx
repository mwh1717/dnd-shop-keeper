import React from 'react';
import { useContext } from 'react';
import CheckboxContext from './CheckboxContent';

interface Details {
  text: string;
  id: string;
}

const Checkbox: React.FC<Details> = ({text, id}) => {

  const { checkboxes, setCheckbox } = useContext(CheckboxContext);

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked
    setCheckbox(id, isChecked);

    console.log(checkboxes)
  }

  return (
      <div className='checkbox-wrapper pt-5'>
        <label className='text-2xl'>
          <input className='mr-2 w-5 h-5' id={id}
            type="checkbox" checked={checkboxes[id] || false} onChange={handleCheckboxChange} />
          {text}
        </label>
      </div>
  )
}

export default Checkbox