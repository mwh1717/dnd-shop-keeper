import React, { createContext, useState } from 'react';

interface CheckboxContextType {
  checkboxes: { [id: string]: boolean };
  setCheckbox: (id: string, isChecked: boolean) => void;
}

interface CheckboxProviderProps {
  children: React.ReactNode;
}

const CheckboxContext = createContext<CheckboxContextType>({
  checkboxes: {},
  setCheckbox: () => {},
});

const setCheckboxInitialState = () => {
  const checkboxList = document.querySelectorAll('.checkbox-wrapper');
  console.log(checkboxList)
}

export const CheckboxProvider: React.FC<CheckboxProviderProps> = ({ children }) => {
  const [checkboxes, setCheckboxes] = useState<{ [id: string]: boolean }>({});

  setCheckboxInitialState();

  const setCheckbox = (id: string, isChecked: boolean) => {
    console.log('checkboxes: ', checkboxes)
    setCheckboxes((checkboxes) => ({
      ...checkboxes,
      [id]: isChecked,
    }));
  };

  return (
    <CheckboxContext.Provider value={{ checkboxes, setCheckbox }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default CheckboxContext;