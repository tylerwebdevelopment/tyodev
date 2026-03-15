import {betterAuth} from 'better-auth';
import {prismaAdapter} from '@better-auth/prisma-adapter';
import {Prisma as prisma} from '@/generated/prisma/client';


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  user: {
    additionalFields: {
      isAdmin: {
        type: 'boolean',
        defaultValue: false,
      }
    }
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  }
})