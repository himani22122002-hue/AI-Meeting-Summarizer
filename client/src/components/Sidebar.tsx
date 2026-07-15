import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Bot, ListTodo, User, Settings, Bell } from 'lucide-react';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/meetings', label: 'Meetings', icon: FileText },
  { path: '/summaries', label: 'AI Summaries', icon: Bot },
  { path: '/action-items', label: 'Action Items', icon: ListTodo },
  { path: '/notifications', label: 'Notifications', icon: Bell },
  { path: '/profile', label: 'Profile', icon: User },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-screen">
      <div className="p-6 font-bold text-2xl text-indigo-600">MeetingSum</div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
