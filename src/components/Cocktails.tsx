import React, { useEffect, useState } from 'react';
import { fetchDrinks } from '../helpers/fetchDrinks';
import Cocktail from './Cocktail';
import { DataFetched } from '../interface/cocktailsData';

const Cocktails = () => {
  const [cocktails, setCocktails] = useState<
    DataFetched[] | string | undefined
  >();

  useEffect(() => {
    fetchDrinks().then((res) => setCocktails(res));
  }, []);
  console.log('cocktails', cocktails);

  return (
    <div>
      <Cocktail cocktails={cocktails} />
    </div>
  );
};

export default Cocktails;
