import React from 'react';
import { Card } from '../ui/Card';

export const ProfileTabs: React.FC = () => {
  const tabs = ['Overview', 'Activity', 'Meetings', 'Security'];
  return (
    <div className="flex gap-6 border-b border-slate-200 mb-6">
      {tabs.map((tab, i) => (
        <button key={tab} className={`pb-3 text-sm font-medium ${i === 0 ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>
          {tab}
        </button>
      ))}
    </div>
  );
};
