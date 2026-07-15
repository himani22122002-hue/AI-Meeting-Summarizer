import React from 'react';
import { AppNotification } from '../../types';
import { Bell, Check, Trash2, Eye, Calendar, Bot, ListTodo, Server } from 'lucide-react';
import { Card } from '../ui/Card';

interface NotificationCardProps {
  notification: AppNotification;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Meeting Scheduled':
      case 'Meeting Updated': return <Calendar className="w-4 h-4 text-blue-600" />;
      case 'Summary Generated': return <Bot className="w-4 h-4 text-purple-600" />;
      case 'Task Assigned':
      case 'Task Completed': return <ListTodo className="w-4 h-4 text-orange-600" />;
      default: return <Server className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <Card className={`group p-4 flex items-center gap-4 transition-all duration-200 hover:shadow-sm ${!notification.isRead ? 'bg-indigo-50/50 border-l-4 border-l-indigo-500' : 'bg-white border border-slate-200'}`}>
      <div className={`p-2 rounded-lg ${!notification.isRead ? 'bg-indigo-100' : 'bg-slate-100'}`}>
        {getIcon(notification.category)}
      </div>
      
      <div className="flex-grow min-w-0">
        <div className="flex items-center justify-between">
          <h4 className={`text-sm font-semibold truncate ${!notification.isRead ? 'text-slate-900' : 'text-slate-700'}`}>
            {notification.title}
          </h4>
          <span className="text-xs text-slate-400 font-medium whitespace-nowrap ml-4">{notification.time}</span>
        </div>
        <p className="text-xs text-slate-500 mt-0.5 truncate">{notification.description}</p>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1.5 hover:bg-slate-100 rounded text-slate-500" title="View"><Eye className="w-4 h-4" /></button>
        {!notification.isRead && <button className="p-1.5 hover:bg-indigo-100 rounded text-indigo-600" title="Mark Read"><Check className="w-4 h-4" /></button>}
        <button className="p-1.5 hover:bg-red-100 rounded text-red-500" title="Delete"><Trash2 className="w-4 h-4" /></button>
      </div>
    </Card>
  );
};
