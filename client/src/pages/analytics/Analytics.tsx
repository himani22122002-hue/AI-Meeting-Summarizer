import React from 'react';
import { AnalyticsHeader } from '../../components/analytics/AnalyticsHeader';
import { AnalyticsCards } from '../../components/analytics/AnalyticsCards';
import { AnalyticsFilters } from '../../components/analytics/AnalyticsFilters';
import { MeetingTrendChart } from '../../components/analytics/MeetingTrendChart';
import { SummaryGenerationChart } from '../../components/analytics/SummaryGenerationChart';
import { ActionCompletionChart } from '../../components/analytics/ActionCompletionChart';
import { MeetingTypePieChart } from '../../components/analytics/MeetingTypePieChart';
import { WeeklyActivityChart } from '../../components/analytics/WeeklyActivityChart';
import { ProductivityScore } from '../../components/analytics/ProductivityScore';
import { TopMeetings } from '../../components/analytics/TopMeetings';

export const Analytics: React.FC = () => {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <AnalyticsHeader />
      <AnalyticsCards />
      <AnalyticsFilters />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <MeetingTrendChart />
        <SummaryGenerationChart />
        <ActionCompletionChart />
        <MeetingTypePieChart />
        <WeeklyActivityChart />
        <ProductivityScore />
      </div>

      <TopMeetings />
    </div>
  );
};
