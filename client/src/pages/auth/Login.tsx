import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { PasswordInput } from '../../components/auth/PasswordInput';
import { SocialLogin } from '../../components/auth/SocialLogin';
import { Link } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your account">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input {...register('email')} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{(errors.email as any).message}</p>}
        </div>
        
        <PasswordInput label="Password" name="password" register={register} error={(errors.password as any)?.message} />
        
        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-slate-600">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <Link to="/forgot-password" className="text-sm text-indigo-600 hover:underline">Forgot password?</Link>
        </div>
        
        <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Login</button>
      </form>
      
      <div className="my-6 flex items-center text-slate-400 text-sm">
        <div className="flex-1 border-t"></div>
        <span className="px-3">Or</span>
        <div className="flex-1 border-t"></div>
      </div>
      
      <SocialLogin />
      
      <p className="mt-6 text-center text-slate-600 text-sm">
        Don't have an account? <Link to="/register" className="text-indigo-600 font-semibold hover:underline">Register</Link>
      </p>
    </AuthLayout>
  );
};
