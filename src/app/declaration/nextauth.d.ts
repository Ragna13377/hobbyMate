import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      username?: string;
      role?: string;
    } & DefaultSession["user"]
  }
  interface User {
    username?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
    role?: string;
  }
}