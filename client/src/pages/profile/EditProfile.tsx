import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { mockUser } from '../../data/mockProfile';
import { Card } from '../../components/ui/Card';

export const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({ defaultValues: mockUser });

  const onSubmit = (data: any) => {
    console.log(data);
    navigate('/profile');
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
        <Card className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium">Name</label><input {...register('name')} className="w-full p-2 border rounded" /></div>
                    <div><label className="block text-sm font-medium">Email</label><input {...register('email')} className="w-full p-2 border rounded" /></div>
                </div>
                <div><label className="block text-sm font-medium">Bio</label><textarea {...register('bio')} className="w-full p-2 border rounded" /></div>
                <div className="flex justify-end gap-3 pt-4">
                    <button type="button" onClick={() => navigate('/profile')} className="px-4 py-2 bg-slate-100 rounded-lg">Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Save</button>
                </div>
            </form>
        </Card>
      </div>
    </div>
  );
};
