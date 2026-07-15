import React from 'react';
import { Meeting } from '../../types';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, FileText } from 'lucide-react';

interface MeetingCardProps {
  meeting: Meeting;
}

export const MeetingCard: React.FC<MeetingCardProps> = ({ meeting }) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{meeting.title}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${meeting.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {meeting.status}
        </span>
      </div>
      <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        {new Date(meeting.date).toLocaleDateString()}
        <User className="w-4 h-4 ml-2" />
        {meeting.createdBy}
      </div>
      <div className="flex flex-wrap gap-1 mb-4">
        {meeting.tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-md flex items-center">
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-400">
          <FileText className="w-4 h-4 mr-1" />
          Summary: {meeting.summaryStatus}
        </div>
        <Link to={`/meetings/${meeting.id}`} className="text-sm text-blue-600 hover:underline">
          View Details
        </Link>
      </div>
    </Card>
  );
};
