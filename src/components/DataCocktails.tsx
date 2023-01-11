import React, { useEffect, useState } from 'react';
import { fetchDrinks } from '../helpers/fetchDrinks';

import { Drink } from '../interface/cocktailsData';
import Cocktails from './Cocktails';
import Input from './Input';

const DataCocktails = () => {
  const [drinks, setDrinks] = useState<Drink[]>();

  function getInputVlaue(inputValue: string) {
    fetchDrinks(inputValue)
      .then((res) => setDrinks(res))
      .catch((error) => console.log('error', error));
  }

  return (
    <div>
      <Cocktails drinks={drinks} />
      <Input getInputValue={getInputVlaue} />
    </div>
  );
};

export default DataCocktails;
