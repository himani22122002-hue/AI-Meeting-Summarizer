import React from 'react';
import { CheckCircle } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  const features = [
    'AI Powered Summaries',
    'Action Item Extraction',
    'Export to PDF',
    'Secure Cloud Storage',
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left side: Branding */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-12 text-white flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">MeetingSum</h1>
          <p className="text-xl opacity-90 mb-8">Turn Meeting Notes into Actionable Insights</p>
          
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-200" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Placeholder Illustration */}
        <div className="w-full h-64 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <span className="text-white/50 text-lg">AI Illustration Placeholder</span>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="w-full lg:w-1/2 bg-slate-50 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
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
