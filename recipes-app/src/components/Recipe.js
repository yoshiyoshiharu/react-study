import React from 'react';
import IngredientList from './IngredientList';
import Instructions from './Instructions';

export default function Recipe({ name, ingerdients, steps }) {
  return (
    <section id='baked-salmon'>
      <h1>{name}</h1>
      <IngredientList ingredients={ingerdients} />
      <Instructions title='Cooking Instructions' steps={steps} />
    </section>
  )
}
