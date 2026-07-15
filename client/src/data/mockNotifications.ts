import { AppNotification } from '../types';

export const mockNotifications: AppNotification[] = [
  { id: '1', category: 'Meeting Scheduled', title: 'New Meeting', description: 'Team sync scheduled for tomorrow.', time: '2m ago', isRead: false, priority: 'medium' },
  { id: '2', category: 'Summary Generated', title: 'Summary Ready', description: 'AI Summary for Client Review generated.', time: '1h ago', isRead: false, priority: 'high' },
  { id: '3', category: 'Task Assigned', title: 'New Task', description: 'You were assigned to: Update budget.', time: '3h ago', isRead: true, priority: 'high' },
  { id: '4', category: 'Task Completed', title: 'Task Done', description: 'Bob completed: Project Plan.', time: '5h ago', isRead: true, priority: 'low' },
  { id: '5', category: 'System Update', title: 'Maintenance', description: 'System update completed.', time: '1d ago', isRead: true, priority: 'low' },
  { id: '6', category: 'Meeting Updated', title: 'Meeting Rescheduled', description: 'Sprint Review moved to Thursday.', time: '1d ago', isRead: true, priority: 'medium' },
  { id: '7', category: 'Summary Generated', title: 'Summary Ready', description: 'Brainstorming Session summary ready.', time: '2d ago', isRead: true, priority: 'low' },
  { id: '8', category: 'Task Assigned', title: 'New Task', description: 'Prepare slides for client.', time: '2d ago', isRead: true, priority: 'medium' },
  { id: '9', category: 'Meeting Scheduled', title: 'New Meeting', description: '1:1 with Manager.', time: '2d ago', isRead: true, priority: 'medium' },
  { id: '10', category: 'System Update', title: 'New Feature', description: 'Check out the new Dashboard.', time: '3d ago', isRead: true, priority: 'low' },
  { id: '11', category: 'Task Completed', title: 'Task Done', description: 'Alice completed: Design assets.', time: '3d ago', isRead: true, priority: 'low' },
  { id: '12', category: 'Meeting Scheduled', title: 'New Meeting', description: 'Client kickoff.', time: '4d ago', isRead: true, priority: 'high' },
  { id: '13', category: 'Summary Generated', title: 'Summary Ready', description: 'Q3 Planning summary ready.', time: '4d ago', isRead: true, priority: 'low' },
  { id: '14', category: 'Task Assigned', title: 'New Task', description: 'Update documentation.', time: '5d ago', isRead: true, priority: 'medium' },
  { id: '15', category: 'Meeting Updated', title: 'Meeting Rescheduled', description: 'Weekly Sync moved to Friday.', time: '6d ago', isRead: true, priority: 'low' },
];
