import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { mockActionItems } from '../../data/mockActionItems';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  assignee: z.string().min(1, 'Assignee is required'),
  priority: z.enum(['critical', 'high', 'medium', 'low']),
  status: z.enum(['pending', 'in-progress', 'completed', 'overdue']),
  dueDate: z.string().min(1, 'Date is required'),
});

export const EditActionItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = mockActionItems.find(i => i.id === id);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: item
  });

  const onSubmit = (data: any) => {
    console.log(data);
    navigate(`/action-items/${id}`);
  };

  if (!item) return <div>Task not found</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Task</h1>
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
            <button type="button" onClick={() => navigate(`/action-items/${id}`)} className="px-4 py-2 bg-slate-100 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Save Changes</button>
          </div>
        </form>
      </Card>
    </div>
  );
};
