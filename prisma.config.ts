import 'dotenv/config';
import { definePrismaConfig } from '@prisma/cli-engine';
import pgvector from '@prisma/orm-extension-pgvector/control';
import { defineConfig } from '@prisma/orm-postgres/config';

export default definePrismaConfig({
  orm: defineConfig({
    contract: './src/prisma/contract.prisma',
    extensions: [pgvector],
    db: {
      connection: process.env.DATABASE_URL!,
    },
  }),
});
