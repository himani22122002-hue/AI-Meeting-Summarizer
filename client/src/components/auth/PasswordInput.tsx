import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ label, name, register, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <input
          {...register(name)}
          type={showPassword ? 'text' : 'password'}
          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
