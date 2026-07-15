import React from 'react';
import { FileText } from 'lucide-react';

export const SummaryEmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
      <div className="p-4 bg-white rounded-full shadow-sm mb-4">
        <FileText className="w-10 h-10 text-slate-400" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">No summaries generated yet.</h3>
      <p className="text-slate-500 mt-2 max-w-sm">Start by generating a summary from one of your meetings to see it appear here.</p>
      <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">Generate First Summary</button>
    </div>
  );
};
