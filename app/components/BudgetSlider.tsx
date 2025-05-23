import React from 'react';

interface BudgetSliderProps {
  budget: number;
  onChange: (value: number) => void;
}

const BudgetSlider: React.FC<BudgetSliderProps> = ({ budget, onChange }) => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h3 className="text-lg font-medium mb-2">Budget</h3>
    <div className="text-2xl font-semibold mb-4">${budget.toLocaleString()}</div>
    <input
      type="range"
      min={500}
      max={5000}
      step={50}
      value={budget}
      onChange={(e) => onChange(+e.target.value)}
      className="w-full"
    />
    <div className="flex justify-between text-sm text-gray-500 mt-2">
      <span>$500</span>
      <span>$5,000</span>
    </div>
  </div>
);

export default BudgetSlider;