import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side: Branding */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-12 text-white flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">MeetingSum</h1>
          <p className="text-xl opacity-90">Transform your meetings into actionable insights effortlessly.</p>
        </div>
        <div className="opacity-80">
          &copy; 2026 AI Meeting Summarizer
        </div>
      </div>

      {/* Right side: Form */}
      <div className="w-full lg:w-1/2 bg-slate-50 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
            <p className="text-slate-500">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
