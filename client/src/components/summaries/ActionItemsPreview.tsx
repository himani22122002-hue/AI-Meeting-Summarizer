import React from 'react';
import { ActionItem } from '../../types';

export const ActionItemsPreview: React.FC<{ items: ActionItem[] }> = ({ items }) => {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">Action Items</h3>
            <div className="space-y-2">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <input type="checkbox" checked={item.completed} className="rounded border-slate-300" />
                        <span className="text-sm text-slate-700">{item.task}</span>
                        <span className="text-xs text-slate-500 ml-auto">{item.assignee}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
