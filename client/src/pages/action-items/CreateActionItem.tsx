import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  assignee: z.string().min(1, 'Assignee is required'),
  priority: z.enum(['critical', 'high', 'medium', 'low']),
  status: z.enum(['pending', 'in-progress', 'completed', 'overdue']),
  dueDate: z.string().min(1, 'Date is required'),
});

export const CreateActionItem: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    navigate('/action-items');
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Task</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div><label className="block text-sm font-medium">Title</label><input {...register('title')} className="w-full p-2 border rounded" /></div>
          <div><label className="block text-sm font-medium">Description</label><textarea {...register('description')} className="w-full p-2 border rounded" /></div>
          <div><label className="block text-sm font-medium">Assignee</label><input {...register('assignee')} className="w-full p-2 border rounded" /></div>
          <div className="flex gap-4">
              <div className="flex-1"><label className="block text-sm font-medium">Priority</label><select {...register('priority')} className="w-full p-2 border rounded"><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option><option value="critical">Critical</option></select></div>
              <div className="flex-1"><label className="block text-sm font-medium">Due Date</label><input type="date" {...register('dueDate')} className="w-full p-2 border rounded" /></div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={() => navigate('/action-items')} className="px-4 py-2 bg-slate-100 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Save</button>
          </div>
        </form>
      </Card>
    </div>
  );
};
