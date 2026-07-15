import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircle2, Clock, AlertCircle, ListTodo } from 'lucide-react';

export const ProgressCard: React.FC = () => {
  const stats = [
    { title: 'Total', value: '24', icon: ListTodo, color: 'text-slate-600' },
    { title: 'Completed', value: '18', icon: CheckCircle2, color: 'text-green-600' },
    { title: 'In Progress', value: '4', icon: Clock, color: 'text-blue-600' },
    { title: 'Overdue', value: '2', icon: AlertCircle, color: 'text-red-600' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, i) => (
        <Card key={i} className="p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
          <stat.icon className={`w-8 h-8 ${stat.color}`} />
          <div>
            <p className="text-sm text-slate-500">{stat.title}</p>
            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
};
