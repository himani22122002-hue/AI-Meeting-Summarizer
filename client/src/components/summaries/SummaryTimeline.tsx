import React from 'react';

export const SummaryTimeline: React.FC = () => {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">Meeting Timeline</h3>
            <div className="border-l-2 border-slate-200 ml-2 space-y-6">
                {['00:00 - Introduction', '10:00 - Proposal Review', '45:00 - Q&A'].map((item, i) => (
                    <div key={i} className="pl-6 relative">
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                        <p className="text-sm text-slate-700">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
