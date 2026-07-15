import React from 'react';
import { Search } from 'lucide-react';

export const NotificationSearch: React.FC = () => {
  return (
    <div className="relative flex-grow">
      <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
      <input type="text" placeholder="Search notifications..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
    </div>
  );
};
