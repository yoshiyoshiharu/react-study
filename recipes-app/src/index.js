import React from 'react';
import { render } from 'react-dom';
import Menu from './components/Menu';

const data = [
  {
    name: 'Baked Salmon',
    ingredients: [
      { name: 'salmon', amount: 1, measurement: 'l lb' },
      { name: 'salt', amount: 0.5, measurement: 'teaspoon' },
      { name: 'salmon', amount: 1, measurement: 'l lb' }
    ],
    steps: [
      'Preheat the oven to 350 degrees.',
      'Spread the salt on the salmon.',
      'Bake for 15 minutes.'
    ],
  },
  {
    name: 'Fish Tacos',
    ingredients: [
      { name: 'flour', amount: 1, measurement: 'cup' },
      { name: 'water', amount: 0.75, measurement: 'cup' }
    ],
    steps: [
      'Cook the flour and water.',
      'Cook the fish for 15 minutes.'
    ]
  }
]

render(
  <Menu recipes={data} />,
  document.getElementById('root')
)
