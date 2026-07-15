import React from 'react';

export const AnalyticsFilters: React.FC = () => {
  return (
    <div className="flex gap-4 mb-8">
      <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none">
        <option>Last 30 Days</option>
        <option>Last 3 Months</option>
      </select>
      <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none">
        <option>All Types</option>
        <option>Client Meeting</option>
      </select>
    </div>
  );
};
