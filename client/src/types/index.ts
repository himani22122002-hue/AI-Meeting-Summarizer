export interface Meeting {
  id: string;
  title: string;
  date: string;
  createdBy: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'draft';
  tags: string[];
  summaryStatus: 'pending' | 'generating' | 'completed' | 'failed';
  description: string;
  notes?: string;
}

export type MeetingType = 'Daily Standup' | 'Client Meeting' | 'Sprint Review' | 'Brainstorming' | 'Other';
