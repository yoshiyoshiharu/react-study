import React from 'react';
import Ingredient from './Ingredient';

export default function IngredientList({ ingredients }) {
  return (
    <ul className='ingredients'>
      {ingredients.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  )
}
