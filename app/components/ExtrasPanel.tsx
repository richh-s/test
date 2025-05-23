import React from 'react';

type Extra = 'whitePC' | 'rgbLighting';

interface ExtrasPanelProps {
  extras: Extra[];
  onToggle: (extra: Extra) => void;
}

const ExtrasPanel: React.FC<ExtrasPanelProps> = ({ extras, onToggle }) => (
  <div className="p-6 bg-white rounded-lg shadow mt-6">
    <h3 className="text-lg font-medium mb-4">Extras</h3>
    <div className="space-y-4">
      <label className="flex items-center justify-between">
        <div>
          <div className="font-semibold">Full White PC</div>
          <div className="text-xs text-gray-500">White case and components</div>
        </div>
        <input
          type="checkbox"
          checked={extras.includes('whitePC')}
          onChange={() => onToggle('whitePC')}
        />
      </label>
      <label className="flex items-center justify-between">
        <div>
          <div className="font-semibold">RGB Lighting</div>
          <div className="text-xs text-gray-500">LED lighting effects</div>
        </div>
        <input
          type="checkbox"
          checked={extras.includes('rgbLighting')}
          onChange={() => onToggle('rgbLighting')}
        />
      </label>
    </div>
  </div>
);

export default ExtrasPanel;