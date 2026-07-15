import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockActionItems } from '../../data/mockActionItems';
import { Card } from '../../components/ui/Card';
import { PriorityBadge } from '../../components/action-items/PriorityBadge';
import { StatusBadge } from '../../components/action-items/StatusBadge';
import { TaskTimeline } from '../../components/action-items/TaskTimeline';
import { Edit, Trash2, Check } from 'lucide-react';

export const ActionItemDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = mockActionItems.find(i => i.id === id);

  if (!item) return <div>Task not found</div>;

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">{item.title}</h1>
        <div className="flex gap-2">
            <Link to={`/action-items/${id}/edit`} className="p-2 bg-white border border-slate-300 rounded-lg"><Edit className="w-5 h-5"/></Link>
            <button className="p-2 bg-white border border-slate-300 rounded-lg text-red-600"><Trash2 className="w-5 h-5"/></button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg"><Check className="w-4 h-4"/> Mark Complete</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <Card className="p-8">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-slate-700">{item.description}</p>
          </Card>
          <Card className="p-8">
             <TaskTimeline />
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Details</h3>
            <div className="space-y-3 text-sm">
                <p>Priority: <PriorityBadge priority={item.priority} /></p>
                <p>Status: <StatusBadge status={item.status} /></p>
                <p>Assignee: {item.assignee}</p>
                <p>Due Date: {item.dueDate}</p>
                <p>Confidence: {item.aiConfidence * 100}%</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
