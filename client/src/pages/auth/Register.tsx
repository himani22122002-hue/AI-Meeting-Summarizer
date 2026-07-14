import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { PasswordInput } from '../../components/auth/PasswordInput';
import { Link } from 'react-router-dom';

const registerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  terms: z.boolean().refine((val) => val === true, 'You must agree to the terms'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <AuthLayout title="Create Account" subtitle="Get started with your free account">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Full Name</label>
          <input {...register('name')} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{(errors.name as any).message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input {...register('email')} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{(errors.email as any).message}</p>}
        </div>
        
        <PasswordInput label="Password" name="password" register={register} error={(errors.password as any)?.message} />
        <PasswordInput label="Confirm Password" name="confirmPassword" register={register} error={(errors.confirmPassword as any)?.message} />
        
        <label className="flex items-center text-sm text-slate-600">
            <input type="checkbox" {...register('terms')} className="mr-2 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /> 
            Agree to Terms and Conditions
        </label>
        {errors.terms && <p className="text-red-500 text-xs">{(errors.terms as any).message}</p>}
        
        <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
        >
            {isSubmitting ? 'Creating...' : 'Create Account'}
        </button>
      </form>
      
      <p className="mt-6 text-center text-slate-600 text-sm">
        Already have an account? <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Login</Link>
      </p>
    </AuthLayout>
  );
};
