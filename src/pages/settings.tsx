import React from 'react';
import Checkbox from '@/components/Checkbox';

const Settings = () => {

  return (
    <main className='flex flex-col items-center pt-10'>
      <Checkbox text='No Legendary Items' id='noLegends' />
      <Checkbox text='Only Green Items' id='onlyGreens' />
    </main>
  )
}

export default Settings