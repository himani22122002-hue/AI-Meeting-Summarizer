import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressCard } from '../../components/action-items/ProgressCard';
import { ActionItemSearch } from '../../components/action-items/ActionItemSearch';
import { ActionItemFilters } from '../../components/action-items/ActionItemFilters';
import { ActionItemTable } from '../../components/action-items/ActionItemTable';
import { mockActionItems } from '../../data/mockActionItems';
import { Plus, Download } from 'lucide-react';

export const ActionItems: React.FC = () => {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Action Items</h1>
          <p className="text-slate-500 mt-1">Track tasks extracted from AI meeting summaries.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition">
            <Download className="w-5 h-5" /> Export
          </button>
          <Link to="/action-items/new" className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
            <Plus className="w-5 h-5" /> New Task
          </Link>
        </div>
      </div>

      <ProgressCard />

      <div className="flex gap-4 mb-8">
        <ActionItemSearch />
        <ActionItemFilters />
      </div>

      <ActionItemTable items={mockActionItems} />
    </div>
  );
};
