import React from 'react';

type UseCase = 'workstation' | 'gaming' | 'office';

interface TabItem {
  key: UseCase;
  label: string;
  icon: string;
}

interface UseCaseTabsProps {
  current: UseCase;
  onChange: (value: UseCase) => void;
}

const tabs: TabItem[] = [
  { key: 'workstation', label: 'Workstation', icon: '💼' },
  { key: 'gaming',       label: 'Gaming',       icon: '🎮' },
  { key: 'office',       label: 'Office',       icon: '📊' },
];

const UseCaseTabs: React.FC<UseCaseTabsProps> = ({ current, onChange }) => (
  <div className="flex space-x-4">
    {tabs.map(({ key, label, icon }) => (
      <button
        key={key}
        onClick={() => onChange(key)}
        className={`flex-1 p-4 rounded-md border ${
          key === current ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
        }`}
      >
        <div className="text-xl">{icon}</div>
        <div className="mt-1 text-sm">{label}</div>
      </button>
    ))}
  </div>
);

export default UseCaseTabs;