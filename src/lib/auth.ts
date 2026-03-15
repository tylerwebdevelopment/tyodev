import {betterAuth} from 'better-auth';
import {prismaAdapter} from '@better-auth/prisma-adapter';
import {prisma} from '@/prisma/client';
import { nextCookies } from 'better-auth/next-js';



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
  plugins: [nextCookies()],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  }
});

