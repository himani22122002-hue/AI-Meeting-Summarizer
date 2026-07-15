import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockMeetings } from '../../data/mockMeetings';
import { MeetingForm } from '../../components/meetings/MeetingForm';

export const EditMeeting: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const meeting = mockMeetings.find(m => m.id === id);

  const handleSubmit = (data: any) => {
    console.log(data);
    navigate(`/meetings/${id}`);
  };

  if (!meeting) return <div>Meeting not found</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Meeting</h1>
      <MeetingForm initialData={meeting} onSubmit={handleSubmit} onCancel={() => navigate(`/meetings/${id}`)} />
    </div>
  );
};
