import React from 'react';
import { Summary } from '../../types';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';
import { Calendar, Tag, Clock, CheckSquare, Star } from 'lucide-react';

interface SummaryCardProps {
  summary: Summary;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ summary }) => {
  return (
    <Card className="p-6 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{summary.meetingTitle}</h3>
          <p className="text-sm text-slate-500 mt-1 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(summary.meetingDate).toLocaleDateString()}
          </p>
        </div>
        <button className="text-slate-400 hover:text-yellow-500 transition-colors">
          <Star className={`w-5 h-5 ${summary.isFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`} />
        </button>
      </div>

      <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
        {summary.executiveSummary}
      </p>

      <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
        <span className="flex items-center"><Tag className="w-4 h-4 mr-1" /> {summary.meetingType}</span>
        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {summary.processingTime}s</span>
        <span className="flex items-center"><CheckSquare className="w-4 h-4 mr-1" /> {summary.actionItems.length} items</span>
      </div>

      <div className="flex gap-2">
        <Link to={`/summaries/${summary.id}`} className="flex-1 text-center py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg text-sm font-medium transition">View</Link>
        <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition">Export</button>
      </div>
    </Card>
  );
};
