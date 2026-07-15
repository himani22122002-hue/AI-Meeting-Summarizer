import React from 'react';
import { Card } from '../ui/Card';
import { PriorityBadge } from './PriorityBadge';
import { StatusBadge } from './StatusBadge';
import { Link } from 'react-router-dom';
import { Calendar, User, FileText } from 'lucide-react';
import { ActionItem } from '../../types';

interface ActionItemCardProps {
  item: ActionItem;
}

export const ActionItemCard: React.FC<ActionItemCardProps> = ({ item }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
        <PriorityBadge priority={item.priority} />
      </div>
      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{item.description}</p>
      
      <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-6">
        <span className="flex items-center"><FileText className="w-4 h-4 mr-1" /> {item.meetingTitle}</span>
        <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {item.assignee}</span>
        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {item.dueDate}</span>
      </div>

      <div className="flex justify-between items-center">
        <StatusBadge status={item.status} />
        <Link to={`/action-items/${item.id}`} className="text-sm text-indigo-600 font-medium hover:underline">View Details</Link>
      </div>
    </Card>
  );
};
