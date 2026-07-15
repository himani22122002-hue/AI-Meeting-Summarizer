import React from 'react';

export const ActionItemFilters: React.FC = () => {
  return (
    <div className="flex gap-3">
      <select className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none">
        <option>All Statuses</option>
        <option>Pending</option>
        <option>In Progress</option>
      </select>
      <select className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none">
        <option>All Priorities</option>
        <option>Critical</option>
        <option>High</option>
      </select>
    </div>
  );
};
