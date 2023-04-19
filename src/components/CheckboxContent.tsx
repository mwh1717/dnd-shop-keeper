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

export const CheckboxProvider: React.FC<CheckboxProviderProps> = ({ children }) => {
  const [checkboxes, setCheckboxes] = useState<{ [id: string]: boolean }>({});

  const setCheckbox = (id: string, isChecked: boolean) => {
    setCheckboxes(prevState => ({
      ...prevState,
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