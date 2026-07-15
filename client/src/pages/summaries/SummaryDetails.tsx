import React from 'react';
import { useParams } from 'react-router-dom';
import { mockSummaries } from '../../data/mockSummaries';
import { Card } from '../../components/ui/Card';
import { SummaryTimeline } from '../../components/summaries/SummaryTimeline';
import { KeyDecisions } from '../../components/summaries/KeyDecisions';
import { ActionItemsPreview } from '../../components/summaries/ActionItemsPreview';
import { Download, Copy, Share2, RefreshCw } from 'lucide-react';

export const SummaryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const summary = mockSummaries.find(s => s.id === id);

  if (!summary) return <div>Summary not found</div>;

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">{summary.meetingTitle}</h1>
        <div className="flex gap-2">
          <button className="p-2 bg-white border border-slate-200 rounded-lg"><Copy className="w-5 h-5 text-slate-600" /></button>
          <button className="p-2 bg-white border border-slate-200 rounded-lg"><Share2 className="w-5 h-5 text-slate-600" /></button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg"><RefreshCw className="w-4 h-4" /> Generate Again</button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg"><Download className="w-4 h-4" /> Download PDF</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <Card className="p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Executive Summary</h2>
            <p className="text-slate-700 leading-relaxed">{summary.executiveSummary}</p>
          </Card>
          <Card className="p-8">
            <KeyDecisions decisions={summary.keyDecisions} />
          </Card>
          <Card className="p-8">
            <ActionItemsPreview items={summary.actionItems} />
          </Card>
        </div>
        <div className="space-y-8">
          <Card className="p-6">
            <SummaryTimeline />
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Participants</h3>
            <div className="flex flex-wrap gap-2">
                {summary.participants.map(p => <span key={p} className="px-3 py-1 bg-slate-100 rounded-full text-sm">{p}</span>)}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
