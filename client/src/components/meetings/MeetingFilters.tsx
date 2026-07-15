import React from 'react';

interface MeetingFiltersProps {
  onStatusChange: (status: string) => void;
}

export const MeetingFilters: React.FC<MeetingFiltersProps> = ({ onStatusChange }) => {
  return (
    <select
      className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      onChange={(e) => onStatusChange(e.target.value)}
    >
      <option value="">All Statuses</option>
      <option value="scheduled">Scheduled</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
      <option value="draft">Draft</option>
    </select>
  );
};
