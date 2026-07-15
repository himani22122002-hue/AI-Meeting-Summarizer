import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockMeetings } from '../../data/mockMeetings';
import { Card } from '../../components/ui/Card';

export const MeetingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const meeting = mockMeetings.find(m => m.id === id);

  if (!meeting) return <div>Meeting not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{meeting.title}</h1>
      <Card className="p-6">
        <p className="text-gray-600 mb-4">{meeting.description}</p>
        <p className="text-sm text-gray-500">Date: {new Date(meeting.date).toLocaleDateString()}</p>
        <p className="text-sm text-gray-500">Status: {meeting.status}</p>
        <div className="mt-6 flex gap-4">
          <Link to={`/meetings/${id}/edit`} className="px-4 py-2 bg-gray-100 rounded-lg">Edit</Link>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg">Delete</button>
        </div>
      </Card>
    </div>
  );
};
