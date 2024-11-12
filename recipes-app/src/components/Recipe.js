import React from 'react';

export default function Recipe({ name, ingerdients, steps }) {
  return (
    <section id='baked-salmon'>
      <h1>{name}</h1>
      <ul className='ingredients'>
        {ingerdients.map((ing, i) => (
          <li key={i}>{ing.name}</li>
        ))}
      </ul>
      <section className='instructions'>
        <h2>Cooking Instructions</h2>
        {steps.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </section>
    </section>
  )
}
