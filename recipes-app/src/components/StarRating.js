import React, { useState } from 'react';
import Star from './Star';

export default function StarRating ({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0); // デストラクチャリングでselectedStarsにステートを代入し、setSelectedStarsを関数として取得
  return [...Array(totalStars)].map((_, i) => (
    <Star
      key={i}
      selected={selectedStars > i}
      onSelect={() => setSelectedStars(i + 1)}
    />
  ));
};
