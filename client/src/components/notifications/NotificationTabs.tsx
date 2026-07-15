import React from 'react';

export const NotificationTabs: React.FC = () => {
  const tabs = ['All', 'Unread', 'Meetings', 'AI Summaries', 'Action Items', 'System'];
  return (
    <div className="flex gap-1 mb-6 border-b border-slate-200">
      {tabs.map((tab, i) => (
        <button key={tab} className={`px-4 py-2 text-sm font-medium ${i === 0 ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>
          {tab}
        </button>
      ))}
    </div>
  );
};
