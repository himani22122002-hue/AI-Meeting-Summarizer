import React from 'react';

export const AnalyticsSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-8 bg-slate-200 rounded w-1/4"></div>
      <div className="grid grid-cols-6 gap-6">
        {[...Array(6)].map((_, i) => <div key={i} className="h-32 bg-slate-200 rounded-lg"></div>)}
      </div>
    </div>
  );
};
