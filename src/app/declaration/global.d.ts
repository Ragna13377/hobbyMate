import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined; // Указываем тип prisma как PrismaClient или undefined
}

export {};