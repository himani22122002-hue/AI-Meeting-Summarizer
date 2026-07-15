import React from 'react';
import { Card } from '../ui/Card';
import { Clock, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export const SummaryStats: React.FC = () => {
  const stats = [
    { title: 'Total Summaries', value: '128', icon: FileText, trend: '+12%' },
    { title: 'Generated Today', value: '14', icon: CheckCircle2, trend: '+5%' },
    { title: 'Pending Processing', value: '3', icon: AlertTriangle, trend: '0%' },
    { title: 'Avg Processing Time', value: '42s', icon: Clock, trend: '-8%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, i) => (
        <Card key={i} className="p-6 flex items-start justify-between hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div>
            <p className="text-sm text-slate-500 font-medium">{stat.title}</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</h3>
            <span className="text-xs font-semibold text-green-500 mt-1 block">{stat.trend}</span>
          </div>
          <div className="p-3 bg-indigo-50 rounded-lg">
            <stat.icon className="w-6 h-6 text-indigo-600" />
          </div>
        </Card>
      ))}
    </div>
  );
};
