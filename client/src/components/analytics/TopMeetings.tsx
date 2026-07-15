import React from 'react';
import { Card } from '../ui/Card';

export const TopMeetings: React.FC = () => {
  const meetings = [
    { title: 'Project X Kickoff', date: '2026-07-20', score: '95%', tasks: 5, duration: '60m' },
    { title: 'Strategy Sync', date: '2026-07-21', score: '92%', tasks: 3, duration: '45m' },
    { title: 'Q3 Planning', date: '2026-07-22', score: '88%', tasks: 8, duration: '90m' },
  ];

  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Top Meetings</h3>
      <table className="w-full text-sm text-left">
        <thead className="text-slate-500 border-b">
          <tr>
            <th className="pb-2">Meeting</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Score</th>
            <th className="pb-2">Tasks</th>
            <th className="pb-2">Duration</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {meetings.map((m, i) => (
            <tr key={i} className="hover:bg-slate-50">
              <td className="py-3">{m.title}</td>
              <td className="py-3">{m.date}</td>
              <td className="py-3 font-semibold text-indigo-600">{m.score}</td>
              <td className="py-3">{m.tasks}</td>
              <td className="py-3">{m.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
