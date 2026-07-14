import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Bot, ListTodo, User, Settings, X } from 'lucide-react';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/meetings', label: 'Meetings', icon: FileText },
  { path: '/summaries', label: 'AI Summaries', icon: Bot },
  { path: '/action-items', label: 'Action Items', icon: ListTodo },
  { path: '/profile', label: 'Profile', icon: User },
  { path: '/settings', label: 'Settings', icon: Settings },
];

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
      <div className="relative w-64 bg-white h-full shadow-lg flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <span className="font-bold text-2xl text-indigo-600">MeetingSum</span>
          <button onClick={onClose}><X className="w-6 h-6 text-gray-500" /></button>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};
