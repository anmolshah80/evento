import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

import { EVENTS } from './data.js';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {
  console.log('\nStart seeding records into database...\n');

  for (const event of EVENTS) {
    const result = await prisma.event.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });

    console.log(`Created event with ID: ${result.id}`);
  }

  console.log('\nFinished seeding records...');
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);

    await prisma.$disconnect();
    process.exit(1);
  });
