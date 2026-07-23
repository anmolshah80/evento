import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'prisma/client';

const connectionString = process.env.DATABASE_URL?.replace(
  /([?&]sslmode=)(?:prefer|require|verify-ca)(?=(&|$))/i,
  '$1verify-full',
);

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({ adapter });

export default prisma;
