import { PrismaClient, UserRole, MeetingStatus, Priority, ActionStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create a user
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      passwordHash: 'hashed_password_placeholder', // Should use bcrypt
      role: UserRole.USER,
      isVerified: true,
    },
  });

  // Create a meeting
  const meeting = await prisma.meeting.create({
    data: {
      userId: user.id,
      title: 'Project Kickoff',
      description: 'Initial project discussion',
      originalNotes: 'Meeting notes content here...',
      meetingDate: new Date(),
      status: MeetingStatus.COMPLETED,
    },
  });

  // Create a summary
  await prisma.summary.create({
    data: {
      meetingId: meeting.id,
      shortSummary: 'Project kickoff completed.',
      detailedSummary: 'Discussed project scope, timeline, and deliverables.',
      bulletSummary: '- Item 1\n- Item 2',
      keyDecisions: { decisions: ['Adopted Agile'] },
      importantTopics: { topics: ['Timeline', 'Budget'] },
    },
  });

  // Create an action item
  await prisma.actionItem.create({
    data: {
      meetingId: meeting.id,
      title: 'Send minutes',
      description: 'Email meeting minutes to all participants',
      assignee: 'John Doe',
      deadline: new Date(),
      priority: Priority.HIGH,
      status: ActionStatus.PENDING,
    },
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
