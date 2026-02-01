import { PrismaClient } from 'prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaPg } from '@prisma/adapter-pg';

const prismaClientSingleton = () => {
  if (process.env.NODE_ENV === 'development') {
    const adapter = new PrismaPg({
      connectionString: process.env.EVENTO_DATABASE_URL!,
    });

    return new PrismaClient({ adapter });
  }

  return new PrismaClient({
    accelerateUrl: process.env.EVENTO_DATABASE_URL!,
  }).$extends(withAccelerate());
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
