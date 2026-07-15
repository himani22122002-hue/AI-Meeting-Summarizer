import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meeting } from '../../types';

const meetingSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.string().min(1, 'Date is required'),
  description: z.string().min(1, 'Description is required'),
  status: z.enum(['scheduled', 'in-progress', 'completed', 'draft']),
});

type MeetingFormData = z.infer<typeof meetingSchema>;

interface MeetingFormProps {
  initialData?: Meeting;
  onSubmit: (data: MeetingFormData) => void;
  onCancel: () => void;
}

export const MeetingForm: React.FC<MeetingFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<MeetingFormData>({
    resolver: zodResolver(meetingSchema),
    defaultValues: initialData || { status: 'draft' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input {...register('title')} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
        {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input type="date" {...register('date')} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
        {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea {...register('description')} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" />
        {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select {...register('status')} className="mt-1 block w-full p-2 border border-gray-300 rounded-lg">
          <option value="draft">Draft</option>
          <option value="scheduled">Scheduled</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="flex justify-end gap-3">
        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200" onClick={onCancel}>Cancel</button>
        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">Save</button>
      </div>
    </form>
  );
};
