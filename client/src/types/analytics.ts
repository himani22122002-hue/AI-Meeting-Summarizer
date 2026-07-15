export interface AnalyticsData {
  totalMeetings: number;
  aiSummariesGenerated: number;
  completedActionItems: number;
  avgMeetingDuration: number; // minutes
  productivityScore: number; // percentage
  monthlyGrowth: number; // percentage
}

export interface ChartData {
  name: string;
  value: number;
}
