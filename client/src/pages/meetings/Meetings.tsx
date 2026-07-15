import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockMeetings } from '../../data/mockMeetings';
import { MeetingCard } from '../../components/meetings/MeetingCard';
import { MeetingSearch } from '../../components/meetings/MeetingSearch';
import { MeetingFilters } from '../../components/meetings/MeetingFilters';
import { Plus } from 'lucide-react';

export const Meetings: React.FC = () => {
  const [meetings] = useState(mockMeetings);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Meetings</h1>
        <Link to="/meetings/new" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Create Meeting
        </Link>
      </div>
      <div className="flex gap-4 mb-6">
        <MeetingSearch onSearch={() => {}} />
        <MeetingFilters onStatusChange={() => {}} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meetings.map(meeting => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
};
