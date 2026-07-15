import React from 'react';
import { Card } from '../ui/Card';

interface DeleteActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}

export const DeleteActionModal: React.FC<DeleteActionModalProps> = ({ isOpen, onClose, onConfirm, title }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6">
        <h2 className="text-lg font-bold">Delete Task</h2>
        <p className="text-sm text-slate-600 mt-2">Are you sure you want to delete "{title}"?</p>
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 bg-slate-100 rounded-lg text-sm">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm">Delete</button>
        </div>
      </Card>
    </div>
  );
};
