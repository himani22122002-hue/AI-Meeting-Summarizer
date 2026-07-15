import React from 'react';

interface PriorityBadgeProps {
  priority: 'critical' | 'high' | 'medium' | 'low';
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  const colors = {
    critical: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-blue-100 text-blue-800',
    low: 'bg-slate-100 text-slate-800'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold uppercase ${colors[priority]}`}>
      {priority}
    </span>
  );
};
