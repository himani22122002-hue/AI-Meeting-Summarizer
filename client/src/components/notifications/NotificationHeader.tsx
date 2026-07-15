import React from 'react';
import { Settings, CheckCircle, Trash2 } from 'lucide-react';

export const NotificationHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Notifications</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your alerts and activities.</p>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-700 hover:border-slate-300 transition"><CheckCircle className="w-3.5 h-3.5" /> Mark All</button>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-700 hover:border-slate-300 transition"><Trash2 className="w-3.5 h-3.5" /> Clear</button>
        <button className="p-1.5 bg-white border border-slate-200 rounded-md hover:border-slate-300 transition"><Settings className="w-4 h-4 text-slate-600" /></button>
      </div>
    </div>
  );
};
