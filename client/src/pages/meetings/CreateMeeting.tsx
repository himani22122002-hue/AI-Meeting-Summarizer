import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MeetingForm } from '../../components/meetings/MeetingForm';

export const CreateMeeting: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    navigate('/meetings');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Meeting</h1>
      <MeetingForm onSubmit={handleSubmit} onCancel={() => navigate('/meetings')} />
    </div>
  );
};
