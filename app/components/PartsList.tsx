import React from 'react'
import { Part } from '../types'

interface PartsListProps {
  parts: Part[]
}

const PartsList: React.FC<PartsListProps> = ({ parts }) => {
  const total = parts.reduce((sum, p) => sum + p.price, 0)

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">PC Parts</h3>
        <span className="text-lg font-semibold text-blue-600">
          ${total.toLocaleString()}
        </span>
      </div>

      <ul className="space-y-4 flex-grow overflow-y-auto">
        {parts.map(p => (
          <li
            key={p.id}
            className="bg-gray-50 rounded-lg p-4 flex items-start"
          >
            <div className="text-2xl mr-4">{p.icon}</div>
            <div className="flex-1">
              <div className="font-medium text-gray-800">{p.name}</div>
              <div className="text-sm text-gray-500 mb-2">{p.description}</div>
              <div className="text-blue-600 font-semibold">
                ${p.price.toLocaleString()}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 p-4 border border-blue-200 rounded-lg flex items-center justify-between">
        <span className="font-medium text-gray-800">Total Cost</span>
        <span className="font-semibold text-blue-600">
          ${total.toLocaleString()}
        </span>
      </div>
    </div>
  )
}

export default PartsList
