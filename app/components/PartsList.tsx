import React from 'react';
import { Part } from '../types';

interface PartsListProps {
  parts: Part[];
}

const PartsList: React.FC<PartsListProps> = ({ parts }) => {
  const total = parts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">PC Parts</h3>
      <ul className="space-y-2">
        {parts.map(p => (
          <li key={p.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{p.icon}</div>
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-xs text-gray-500">{p.description}</div>
              </div>
            </div>
            <div className="font-semibold">${p.price}</div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between font-bold text-lg">
        <span>Total Cost</span>
        <span>${total.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PartsList;