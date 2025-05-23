import React from 'react';

export type UseCase = 'workstation' | 'gaming' | 'office';
export type Extra = 'whitePC' | 'rgbLighting';

export interface Part {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}