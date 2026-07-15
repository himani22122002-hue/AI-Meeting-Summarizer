import React from 'react';
import { Meeting } from '../../types';
import { Link } from 'react-router-dom';

interface MeetingTableProps {
  meetings: Meeting[];
}

export const MeetingTable: React.FC<MeetingTableProps> = ({ meetings }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {meetings.map((meeting) => (
            <tr key={meeting.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{meeting.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(meeting.date).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{meeting.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Link to={`/meetings/${meeting.id}`} className="text-blue-600 hover:text-blue-900">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
