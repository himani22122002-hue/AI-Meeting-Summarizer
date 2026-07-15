import React from 'react';
import { Card } from '../ui/Card';

interface DeleteMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  meetingTitle: string;
}

export const DeleteMeetingModal: React.FC<DeleteMeetingModalProps> = ({ isOpen, onClose, onConfirm, meetingTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6">
        <h2 className="text-xl font-bold text-gray-900">Delete Meeting</h2>
        <p className="mt-2 text-sm text-gray-600">Are you sure you want to delete "{meetingTitle}"? This action cannot be undone.</p>
        <div className="mt-6 flex justify-end gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700" onClick={onConfirm}>Delete</button>
        </div>
      </Card>
    </div>
  );
};
