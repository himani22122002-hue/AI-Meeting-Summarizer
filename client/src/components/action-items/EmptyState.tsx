import React from 'react';
import { ListTodo } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-slate-200 rounded-lg bg-slate-50">
      <div className="p-4 bg-white rounded-full shadow-sm mb-4">
        <ListTodo className="w-10 h-10 text-slate-400" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">No action items yet.</h3>
      <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">Create First Task</button>
    </div>
  );
};
