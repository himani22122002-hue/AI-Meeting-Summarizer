import React from 'react';

export const TaskTimeline: React.FC = () => {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">Task Activity</h3>
            <div className="border-l-2 border-slate-200 ml-2 space-y-6">
                {['Created - 2026-07-21', 'Status changed to In-Progress - 2026-07-22'].map((item, i) => (
                    <div key={i} className="pl-6 relative">
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                        <p className="text-sm text-slate-700">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
