import React from 'react';

type Extra = 'whitePC' | 'rgbLighting';
type RAMSize = 'Auto' | '16GB' | '32GB' | '64GB';

interface ExtrasPanelProps {
  extras: Extra[];
  onToggle: (extra: Extra) => void;
  selectedRAM: RAMSize;
  onRAMChange: (ram: RAMSize) => void;
}

const ExtrasPanel: React.FC<ExtrasPanelProps> = ({ extras, onToggle, selectedRAM, onRAMChange }) => (
  <div className="p-6 bg-white rounded-lg shadow mt-6">
    {/* Header */}
    <h3 className="text-lg font-semibold mb-4 text-gray-800">Extras</h3>

    <div className="space-y-6">
      {/* Full White PC Toggle */}
      <label className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-gray-800">Full White PC</div>
          <div className="text-xs text-gray-500">White case and components</div>
        </div>
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            checked={extras.includes('whitePC')}
            onChange={() => onToggle('whitePC')}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer transition-transform duration-200 ease-in-out checked:translate-x-4 checked:bg-blue-500"
          />
          <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></span>
        </div>
      </label>

      {/* RGB Lighting Toggle */}
      <label className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-gray-800">RGB Lighting</div>
          <div className="text-xs text-gray-500">LED lighting effects</div>
        </div>
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            checked={extras.includes('rgbLighting')}
            onChange={() => onToggle('rgbLighting')}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer transition-transform duration-200 ease-in-out checked:translate-x-4 checked:bg-blue-500"
          />
          <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></span>
        </div>
      </label>

      {/* RAM Size Selection */}
      <div>
        <div className="font-semibold text-gray-800 mb-2">RAM Size</div>
        <div className="grid grid-cols-2 gap-2">
          {(['Auto', '16GB', '32GB', '64GB'] as RAMSize[]).map((ram) => (
            <button
              key={ram}
              onClick={() => onRAMChange(ram)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedRAM === ram
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              {ram}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ExtrasPanel;