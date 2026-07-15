import React from 'react';
import { Card } from '../ui/Card';

export const SecurityCard: React.FC = () => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-slate-900 mb-4">Security</h3>
      <div className="space-y-3 text-sm">
        <p className="flex justify-between">Email Verified <span className="text-green-600 font-medium">Yes</span></p>
        <p className="flex justify-between">2FA <span className="text-indigo-600 font-medium">Enabled</span></p>
        <p className="flex justify-between">Last Login <span className="text-slate-500">2 hours ago</span></p>
      </div>
    </Card>
  );
};
