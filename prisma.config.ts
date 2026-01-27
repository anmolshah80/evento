import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  // the main entry point for your schema
  schema: 'prisma/schema.prisma',
  // where migrations should be generated
  // what script to run for "prisma db seed"
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seeders/seed.ts',
  },
  // the database URL
  datasource: {
    // type safe env() helper
    // does not replace the need for dotenv
    url: env('DATABASE_URL'),
    // Source -> https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/shadow-database
    // shadowDatabaseUrl: env('SHADOW_DATABASE_URL'),
  },
});
