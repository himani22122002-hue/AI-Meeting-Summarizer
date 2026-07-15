import React from 'react';

export const NotificationFilters: React.FC = () => {
  return (
    <div className="flex gap-3">
      <select className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none">
        <option>All Categories</option>
      </select>
      <select className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none">
        <option>Newest</option>
        <option>Oldest</option>
      </select>
    </div>
  );
};
