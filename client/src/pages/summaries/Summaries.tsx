import React from 'react';
import { SummaryStats } from '../../components/summaries/SummaryStats';
import { SummarySearch } from '../../components/summaries/SummarySearch';
import { SummaryFilters } from '../../components/summaries/SummaryFilters';
import { SummaryCard } from '../../components/summaries/SummaryCard';
import { mockSummaries } from '../../data/mockSummaries';
import { Plus, Download } from 'lucide-react';

export const Summaries: React.FC = () => {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Summaries</h1>
          <p className="text-slate-500 mt-1">Manage and review all AI generated meeting summaries.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition">
            <Download className="w-5 h-5" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
            <Plus className="w-5 h-5" /> Generate Summary
          </button>
        </div>
      </div>

      <SummaryStats />

      <div className="flex gap-4 mb-8">
        <SummarySearch />
        <SummaryFilters />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSummaries.map(summary => (
          <SummaryCard key={summary.id} summary={summary} />
        ))}
      </div>
    </div>
  );
};
