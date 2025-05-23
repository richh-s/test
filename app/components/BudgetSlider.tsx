import React from 'react';

interface BudgetSliderProps {
  budget: number;
  onChange: (value: number) => void;
}

const BudgetSlider: React.FC<BudgetSliderProps> = ({ budget, onChange }) => (
  <div className="p-6 bg-white rounded-lg shadow mt-6">
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">Budget</h3>
      <div className="text-3xl font-bold mb-2 text-blue-600">${budget.toLocaleString()}</div>
      <div className="text-sm text-gray-500 mb-4">Total Budget</div>
    </div>
    <div className="relative">
      <input
        type="range"
        min={500}
        max={5000}
        step={50}
        value={budget}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
        <span className="text-sm text-gray-500">$500</span>
        <span className="text-sm text-gray-500">$5,000</span>
      </div>
    </div>
    <div className="flex mt-4 gap-2">
      <div className="text-center border-2 border-gray-200 p-2 rounded-md flex-1">
        <div className="text-sm font-medium text-gray-700">Entry</div>
        <div className="text-xs text-gray-500">$500-$800</div>
      </div>
      <div className="text-center border-2 border-gray-200 p-2 rounded-md flex-1">
        <div className="text-sm font-medium text-gray-700">Mid-Range</div>
        <div className="text-xs text-gray-500">$800-$1500</div>
      </div>
      <div className="text-center border-2 border-gray-200 p-2 rounded-md flex-1">
        <div className="text-sm font-medium text-gray-700">High-End</div>
        <div className="text-xs text-gray-500">$1500+</div>
      </div>
    </div>
  </div>
);

export default BudgetSlider;