import React from 'react';
import Star from './Star';

export default function StarRating ({ totalStars = 5 }) {
  return [...Array(totalStars)].map((_, i) => <Star key={i} />);
};

