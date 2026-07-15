import React from 'react';
import { User } from '../../types';
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileStats } from '../../components/profile/ProfileStats';
import { ProfileTabs } from '../../components/profile/ProfileTabs';
import { ProfileSkills } from '../../components/profile/ProfileSkills';
import { SecurityCard } from '../../components/profile/SecurityCard';
import { mockUser } from '../../data/mockProfile';
import { Card } from '../../components/ui/Card';

export const Profile: React.FC = () => {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <ProfileHeader user={mockUser} />
        <ProfileStats stats={mockUser.stats} />
        <ProfileTabs />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
                <Card className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">About</h3>
                    <p className="text-slate-600">{mockUser.bio}</p>
                </Card>
                <ProfileSkills skills={mockUser.skills} />
            </div>
            <div className="space-y-6">
                <SecurityCard />
            </div>
        </div>
      </div>
    </div>
  );
};
