import React from 'react';
import { User } from '../../types';
import { Link } from 'react-router-dom';
import { MapPin, Building, Calendar } from 'lucide-react';

interface ProfileHeaderProps {
  user: User;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row items-center md:items-start gap-6">
      <img src={user.avatarUrl} alt={user.name} className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
      <div className="flex-grow text-center md:text-left">
        <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
        <p className="text-indigo-600 font-medium">{user.role}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-slate-500 text-sm">
          <span className="flex items-center gap-1"><Building className="w-4 h-4" /> {user.company}</span>
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {user.location}</span>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Joined {user.memberSince}</span>
        </div>
      </div>
      <Link to="/profile/edit" className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition">
        Edit Profile
      </Link>
    </div>
  );
};
