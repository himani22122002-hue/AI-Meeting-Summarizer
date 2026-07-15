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
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: any) => {
    // TODO: Implement password reset logic
    setIsSubmitted(true);
  };

  return (
    <AuthLayout title="Reset password" subtitle="Enter your email to receive a reset link">
      {isSubmitted ? (
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            ✓
          </div>
          <p className="text-slate-800 font-medium mb-4">Reset link sent to your email!</p>
          <Link to="/login" className="text-indigo-600 hover:underline">Back to Login</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input {...register('email')} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{(errors.email as any).message}</p>}
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </button>
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
