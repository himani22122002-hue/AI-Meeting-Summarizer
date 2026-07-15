import { Summary } from '../types';

export const mockSummaries: Summary[] = [
  {
    id: 's1',
    meetingId: 'm1',
    meetingTitle: 'Client Proposal Review',
    meetingDate: '2026-07-21T14:00:00Z',
    meetingType: 'Client Meeting',
    status: 'completed',
    executiveSummary: 'Reviewed the draft proposal for Project X. Key adjustments needed in budget and timeline sections.',
    keyDecisions: ['Approved budget increase by 10%', 'Delayed Phase 2 by two weeks'],
    importantTopics: ['Project scope', 'Resource allocation'],
    risks: ['Timeline risk due to dependency on external vendor'],
    actionItems: [
        { id: 'a1', task: 'Update proposal budget', assignee: 'Alice', dueDate: '2026-07-23', completed: false },
        { id: 'a2', task: 'Inform client about delay', assignee: 'Bob', dueDate: '2026-07-22', completed: true }
    ],
    participants: ['Alice', 'Bob', 'Charlie'],
    processingTime: 45,
    isFavorite: true
  }
];
