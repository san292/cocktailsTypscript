import React from 'react';
import { Drink, Drinks } from '../interface/cocktailsData';
import Cocktail from './Cocktail';
// interface cocktailsType {
//   cocktails: { strDrink: string; strDrinkThumb: string };
// }

const Cocktails = ({ drinks }: Drinks) => {
  console.log('drinks', drinks);

  return (
    <div className="card-groupe mb-3">
      {drinks?.map((c: Drink) => (
        <Cocktail drink={c} />
      ))}
    </div>
  );
};

export default Cocktails;
