import React from 'react';
import { User } from '../../types';
import { Card } from '../ui/Card';

interface ProfileSkillsProps {
  skills: User['skills'];
}

export const ProfileSkills: React.FC<ProfileSkillsProps> = ({ skills }) => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-slate-900 mb-4">Skills</h3>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-700">{skill.name}</span>
              <span className="text-slate-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
