import React from 'react';
import { Card } from '../../components/ui/Card';
import { FileText, Bot, ListTodo, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Total Meetings', value: '24', icon: FileText, color: 'text-indigo-600' },
  { label: 'AI Summaries', value: '18', icon: Bot, color: 'text-purple-600' },
  { label: 'Pending Items', value: '5', icon: ListTodo, color: 'text-amber-600' },
  { label: 'Completed', value: '12', icon: CheckCircle, color: 'text-emerald-600' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Meetings">
          <ul className="space-y-4">
            {['Project Kickoff', 'Design Review', 'Client Sync'].map((m) => (
              <li key={m} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                <span className="text-gray-700">{m}</span>
                <span className="text-xs text-gray-400">2 hours ago</span>
              </li>
            ))}
          </ul>
        </Card>
        
        <Card title="Quick Actions">
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-indigo-50 text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 transition">New Meeting</button>
            <button className="p-4 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition">Summarize Note</button>
          </div>
        </Card>
      </div>
    </div>
  );
};
