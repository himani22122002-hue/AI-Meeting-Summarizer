import React from 'react';
import { User } from '../../types';
import { Card } from '../ui/Card';

interface ProfileStatsProps {
  stats: User['stats'];
}

export const ProfileStats: React.FC<ProfileStatsProps> = ({ stats }) => {
  const statItems = [
    { label: 'Meetings', value: stats.meetingsCreated },
    { label: 'AI Summaries', value: stats.aiSummaries },
    { label: 'Tasks Done', value: stats.completedTasks },
    { label: 'Productivity', value: `${stats.productivityScore}%` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {statItems.map((s, i) => (
        <Card key={i} className="p-4 text-center hover:shadow-md transition">
          <p className="text-xs text-slate-500 font-medium uppercase">{s.label}</p>
          <h3 className="text-xl font-bold text-slate-900 mt-1">{s.value}</h3>
        </Card>
      ))}
    </div>
  );
};
