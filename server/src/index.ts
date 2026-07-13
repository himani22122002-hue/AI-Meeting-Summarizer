import 'dotenv/config';
import { app } from './app.js';
import { env } from './config/env.js';
import { prisma } from './config/database.js';

async function start() {
  try {
    await prisma.$connect();
    app.listen(env.PORT, () => {
      console.log(`Server running on http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();
