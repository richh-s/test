import { useState } from 'react';
import { Extra } from '../types';

export function useExtras() {
  const [extras, setExtras] = useState<Extra[]>([]);
  const toggle = (e: Extra) => {
    setExtras(prev => prev.includes(e) ? prev.filter(x => x !== e) : [...prev, e]);
  };
  return { extras, toggleExtra: toggle };
}