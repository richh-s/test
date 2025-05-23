import React from 'react';
import { Part } from '../types';

interface PartsListProps {
  parts: Part[];
}

const PartsList: React.FC<PartsListProps> = ({ parts }) => {
  const total = parts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow mt-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">PC Parts</h3>
        <div className="text-lg font-semibold text-blue-600">${total.toLocaleString()}</div>
      </div>
      <ul className="space-y-2 flex-grow">
        {parts.map((p) => (
          <li
            key={p.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className="text-xl">{p.icon}</div>
              <div>
                <div className="font-medium text-gray-800">{p.name}</div>
                <div className="text-xs text-gray-500">{p.description}</div>
              </div>
            </div>
            <div className="font-medium text-blue-600">${p.price}</div>
          </li>
        ))}
      </ul>
      <div className="mt-4 w-full">
        <div className="bg-blue-50 p-3 rounded-lg flex items-center justify-between w-full">
          <span className="font-semibold text-gray-800">Total Cost</span>
          <span className="font-semibold text-blue-600">${total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PartsList;