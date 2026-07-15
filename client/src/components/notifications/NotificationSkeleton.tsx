import React from 'react';

export const NotificationSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-20 bg-slate-100 rounded-lg"></div>
      ))}
    </div>
  );
};
