import React, { useState } from 'react';
import { NotificationHeader } from '../../components/notifications/NotificationHeader';
import { NotificationTabs } from '../../components/notifications/NotificationTabs';
import { NotificationSearch } from '../../components/notifications/NotificationSearch';
import { NotificationFilters } from '../../components/notifications/NotificationFilters';
import { NotificationCard } from '../../components/notifications/NotificationCard';
import { NotificationEmptyState } from '../../components/notifications/NotificationEmptyState';
import { mockNotifications } from '../../data/mockNotifications';
import { Card } from '../../components/ui/Card';
import { Bell, FileText, CheckSquare, Server } from 'lucide-react';

export const Notifications: React.FC = () => {
  const [notifications] = useState(mockNotifications);

  const stats = [
    { label: 'Unread', value: '2', icon: Bell, color: 'text-indigo-600' },
    { label: 'Read', value: '13', icon: CheckSquare, color: 'text-green-600' },
    { label: 'Meetings', value: '6', icon: FileText, color: 'text-blue-600' },
    { label: 'System', value: '7', icon: Server, color: 'text-slate-600' },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <NotificationHeader />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map(s => (
                <Card key={s.label} className="p-4 flex items-center gap-3 hover:shadow-sm transition-shadow">
                    <div className={`p-2 bg-slate-100 rounded-lg ${s.color}`}>
                        <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">{s.label}</p>
                        <p className="text-lg font-bold text-slate-900">{s.value}</p>
                    </div>
                </Card>
            ))}
        </div>

        <NotificationTabs />
        
        <div className="flex gap-4 mb-6">
            <NotificationSearch />
            <NotificationFilters />
        </div>

        {notifications.length > 0 ? (
            <div className="space-y-2">
                {notifications.map(n => <NotificationCard key={n.id} notification={n} />)}
            </div>
        ) : (
            <NotificationEmptyState />
        )}
      </div>
    </div>
  );
};
