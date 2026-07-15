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
  title: string;
  description: string;
  meetingId: string;
  meetingTitle: string;
  assignee: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  dueDate: string;
  createdAt: string;
  aiConfidence: number;
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
