import React from 'react';
import { ActionItem } from '../../types';
import { Link } from 'react-router-dom';
import { PriorityBadge } from './PriorityBadge';
import { StatusBadge } from './StatusBadge';

interface ActionItemTableProps {
  items: ActionItem[];
}

export const ActionItemTable: React.FC<ActionItemTableProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Task</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Assigned To</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Priority</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.title}</td>
              <td className="px-6 py-4 text-sm text-slate-500">{item.assignee}</td>
              <td className="px-6 py-4"><PriorityBadge priority={item.priority} /></td>
              <td className="px-6 py-4"><StatusBadge status={item.status} /></td>
              <td className="px-6 py-4 text-sm text-indigo-600 font-medium">
                <Link to={`/action-items/${item.id}`} className="hover:underline">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
