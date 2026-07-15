import React from 'react';
import { Check } from 'lucide-react';

export const KeyDecisions: React.FC<{ decisions: string[] }> = ({ decisions }) => {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">Key Decisions</h3>
            <ul className="space-y-2">
                {decisions.map((decision, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {decision}
                    </li>
                ))}
            </ul>
        </div>
    );
};
