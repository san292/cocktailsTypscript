import React from 'react';
import { Drink } from '../interface/cocktailsData';
import Card from 'react-bootstrap/Card';

const Cocktail = ({ drink }: Drink) => {
  const { strDrink, strDrinkThumb } = drink;
  console.log('drink', drink);

  return (
    <Card style={{ width: '18rem', margin: '0.3rem' }}>
      <Card.Img variant="top" src={strDrinkThumb} />
      <Card.Title>{strDrink}</Card.Title>
    </Card>
  );
};

export default Cocktail;
