import { AnalyticsData, ChartData } from '../types/analytics';

export const mockAnalyticsData: AnalyticsData = {
  totalMeetings: 154,
  aiSummariesGenerated: 142,
  completedActionItems: 89,
  avgMeetingDuration: 45,
  productivityScore: 88,
  monthlyGrowth: 12,
};

export const meetingTrendData: ChartData[] = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 15 },
  { name: 'Mar', value: 12 },
  { name: 'Apr', value: 20 },
  { name: 'May', value: 18 },
  { name: 'Jun', value: 25 },
];
