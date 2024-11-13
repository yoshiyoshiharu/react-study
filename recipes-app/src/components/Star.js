import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Star ({ selected = false, onSelect = f => f }) { // onSelectは何もしないダミー関数をデフォルト値として設定
  return <FaStar color={ selected ? 'red' : 'grey' } onClick={onSelect} />
};
