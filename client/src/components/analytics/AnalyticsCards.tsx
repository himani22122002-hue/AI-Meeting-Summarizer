import React from 'react';
import { Card } from '../ui/Card';
import { Users, FileText, CheckSquare, Clock, Target, TrendingUp } from 'lucide-react';

export const AnalyticsCards: React.FC = () => {
  const cards = [
    { title: 'Total Meetings', value: '154', icon: Users, trend: '+12%' },
    { title: 'AI Summaries', value: '142', icon: FileText, trend: '+8%' },
    { title: 'Completed Tasks', value: '89', icon: CheckSquare, trend: '+20%' },
    { title: 'Avg Duration', value: '45m', icon: Clock, trend: '-5%' },
    { title: 'Productivity', value: '88%', icon: Target, trend: '+3%' },
    { title: 'Growth', value: '12%', icon: TrendingUp, trend: '+2%' },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
      {cards.map((card, i) => (
        <Card key={i} className="p-6 flex flex-col gap-3 hover:shadow-lg transition-all">
          <card.icon className="w-8 h-8 text-indigo-600" />
          <div>
            <p className="text-sm text-slate-500 font-medium">{card.title}</p>
            <h3 className="text-2xl font-bold text-slate-900">{card.value}</h3>
            <p className="text-xs text-green-500 font-semibold">{card.trend}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
