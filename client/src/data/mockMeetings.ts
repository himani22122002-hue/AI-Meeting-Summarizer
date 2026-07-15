import { Meeting } from '../types';

export const mockMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Weekly Sync',
    date: '2026-07-20T10:00:00Z',
    createdBy: 'Alice',
    status: 'scheduled',
    tags: ['internal', 'weekly'],
    summaryStatus: 'pending',
    description: 'Weekly team synchronization meeting.',
  },
  {
    id: '2',
    title: 'Client Proposal Review',
    date: '2026-07-21T14:00:00Z',
    createdBy: 'Bob',
    status: 'completed',
    tags: ['client', 'proposal'],
    summaryStatus: 'completed',
    description: 'Reviewing the proposal for the new client project.',
    notes: 'Key points discussed: Budget, Timeline, Scope.',
  },
];
