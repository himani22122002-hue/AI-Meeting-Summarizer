import React from 'react';
import { Download, RefreshCw, FileText } from 'lucide-react';

export const AnalyticsHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Analytics Dashboard</h1>
        <p className="text-slate-500 mt-1">Visualize meeting productivity and AI performance.</p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition"><Download className="w-4 h-4" /> Export</button>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition"><FileText className="w-4 h-4" /> PDF</button>
        <button className="p-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"><RefreshCw className="w-4 h-4" /></button>
      </div>
    </div>
  );
};
