import { ActionItem } from '../types';

export const mockActionItems: ActionItem[] = [
  {
    id: 'ai1',
    title: 'Update proposal budget',
    description: 'Adjust the budget based on the 10% increase approved in the meeting.',
    meetingId: 'm1',
    meetingTitle: 'Client Proposal Review',
    assignee: 'Alice',
    priority: 'high',
    status: 'in-progress',
    dueDate: '2026-07-23',
    createdAt: '2026-07-21',
    aiConfidence: 0.95
  },
  {
    id: 'ai2',
    title: 'Finalize project timeline',
    description: 'Update the project plan to reflect the two-week delay.',
    meetingId: 'm1',
    meetingTitle: 'Client Proposal Review',
    assignee: 'Bob',
    priority: 'critical',
    status: 'pending',
    dueDate: '2026-07-25',
    createdAt: '2026-07-21',
    aiConfidence: 0.88
  }
];
