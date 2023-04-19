import React from 'react';
import Checkbox from '@/components/Checkbox';
import { CheckboxProvider } from '../components/CheckboxContent';

const Settings = () => {

  return (
    <CheckboxProvider>
      <main className='flex flex-col items-center pt-10'>
        <Checkbox text='No Legendary Items' id='noLegends' />
        <Checkbox text='Only Green Items' id='onlyGreens' />
      </main>
    </CheckboxProvider>
  )
}

export default Settings