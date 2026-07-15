import React from 'react';

export const SummaryFilters: React.FC = () => {
  return (
    <div className="flex gap-3">
      <select className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none">
        <option>All Types</option>
        <option>Client Meeting</option>
        <option>Daily Standup</option>
      </select>
      <select className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none">
        <option>Newest First</option>
        <option>Oldest First</option>
      </select>
    </div>
  );
};
