'use client'
import React, { useState, useMemo } from 'react';
import type { NextPage } from 'next';

import BudgetSlider from '../app/components/BudgetSlider';
import UseCaseTabs from '../app/components/UseCaseTabs';
import ExtrasPanel from '../app/components/ExtrasPanel';
import PartsList from '../app/components/PartsList';
import { partsCatalog } from '../app/data/partsCatalog';
import type { UseCase, Extra, Part } from '../app/types';

const Home: NextPage = () => {
  const [budget, setBudget] = useState(1400);
  const [useCase, setUseCase] = useState<UseCase>('gaming');
  const [extras, setExtras] = useState<Extra[]>([]);

  const parts = useMemo<Part[]>(() => partsCatalog[useCase], [useCase]);

  const toggleExtra = (e: Extra) =>
    setExtras(prev =>
      prev.includes(e) ? prev.filter(x => x !== e) : [...prev, e]
    );

  const totalCost = parts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
        PC Builder
      </h1>
      <p className="text-center text-gray-700 mb-12">
        Configure your perfect build with our intelligent part picker
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div>
          <BudgetSlider budget={budget} onChange={setBudget} />
          <div className="mt-6 p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Use Case</h3>
            <UseCaseTabs current={useCase} onChange={setUseCase} />
          </div>
          <ExtrasPanel extras={extras} onToggle={toggleExtra} />
        </div>

        {/* Parts overview */}
        <PartsList parts={parts} totalCost={totalCost} />
      </div>
    </div>
  );
};

export default Home;