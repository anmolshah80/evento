import { PrismaClient } from '../generated/prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaPg } from '@prisma/adapter-pg';

import { EVENTS } from './data.js';

let prisma;

if (process.env.NODE_ENV === 'development') {
  const adapter = new PrismaPg({
    connectionString: process.env.EVENTO_DATABASE_URL!,
  });

  prisma = new PrismaClient({ adapter });
} else {
  prisma = new PrismaClient({
    accelerateUrl: process.env.EVENTO_DATABASE_URL!,
  }).$extends(withAccelerate());
}

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
