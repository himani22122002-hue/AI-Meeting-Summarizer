import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { Link } from 'react-router-dom';

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const ForgotPassword: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <AuthLayout title="Reset password" subtitle="Enter your email to receive a reset link">
      {isSubmitted ? (
        <div className="text-center">
          <p className="text-green-600 font-medium mb-4">Reset link sent to your email!</p>
          <Link to="/login" className="text-indigo-600 hover:underline">Back to Login</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input {...register('email')} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{(errors.email as any).message}</p>}
          </div>
          
          <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Send Reset Link</button>
        </form>
      )}
      
      {!isSubmitted && (
        <p className="mt-6 text-center text-slate-600 text-sm">
          Remember your password? <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Login</Link>
        </p>
      )}
    </AuthLayout>
  );
};
