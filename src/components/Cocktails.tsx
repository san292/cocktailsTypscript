import React, { useEffect, useState } from 'react';
import { fetchDrinks } from '../helpers/fetchDrinks';
import Cocktail from './Cocktail';
import { DataFetched } from '../helpers/fetchDrinks';

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchDrinks().then((res) => setCocktails(res));
  }, []);

  return (
    <div>
      <Cocktail />
    </div>
  );
};

export default Cocktails;
