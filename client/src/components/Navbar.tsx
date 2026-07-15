import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  toggleMobileSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleMobileSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-8">
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search meetings..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/notifications" className="p-2 text-gray-400 hover:text-indigo-600">
          <Bell className="w-6 h-6" />
        </Link>
        <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-semibold">
          JD
        </div>
      </div>
    </header>
  );
};
