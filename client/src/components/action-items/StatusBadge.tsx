import React from 'react';

interface StatusBadgeProps {
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const colors = {
    pending: 'bg-slate-100 text-slate-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    overdue: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${colors[status]}`}>
      {status.replace('-', ' ')}
    </span>
  );
};
