import React from 'react';
import IngredientList from './IngredientList';
import Instructions from './Instructions';
import StarRating from './StarRating';

export default function Recipe({ name, ingredients, steps }) {
  return (
    <section id='baked-salmon'>
      <h1>{name}</h1>
      <IngredientList ingredients={ingredients} />
      <Instructions title='Cooking Instructions' steps={steps} />
      <StarRating totalStars={5} />
    </section>
  )
}
