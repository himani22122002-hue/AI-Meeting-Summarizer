import { User } from '../types';

export const mockUser: User = {
  id: 'u1',
  name: 'Jane Doe',
  email: 'jane.doe@company.com',
  role: 'Senior Product Designer',
  company: 'Innovate Solutions Inc.',
  location: 'San Francisco, CA',
  memberSince: 'January 2024',
  bio: 'Passionate about designing intuitive AI-driven user experiences. Loves tackling complex workflows.',
  avatarUrl: 'https://ui-avatars.com/api/?name=Jane+Doe&background=random',
  skills: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 95 },
  ],
  stats: {
    meetingsCreated: 42,
    aiSummaries: 38,
    completedTasks: 125,
    productivityScore: 92,
  }
};
