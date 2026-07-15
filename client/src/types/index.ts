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

export interface ActionItem {
  id: string;
  task: string;
  assignee: string;
  dueDate: string;
  completed: boolean;
}

export interface Summary {
  id: string;
  meetingId: string;
  meetingTitle: string;
  meetingDate: string;
  meetingType: MeetingType;
  status: 'completed' | 'pending' | 'processing';
  executiveSummary: string;
  keyDecisions: string[];
  importantTopics: string[];
  risks: string[];
  actionItems: ActionItem[];
  participants: string[];
  processingTime: number; // in seconds
  isFavorite: boolean;
}
