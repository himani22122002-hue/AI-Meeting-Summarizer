import React from 'react';

export const SocialLogin: React.FC = () => {
  return (
    <div className="space-y-3">
      <button className="w-full p-3 border border-slate-200 rounded-lg hover:bg-slate-50 flex items-center justify-center space-x-2 transition">
        <span>Continue with Google</span>
      </button>
      <button className="w-full p-3 border border-slate-200 rounded-lg hover:bg-slate-50 flex items-center justify-center space-x-2 transition">
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
};
