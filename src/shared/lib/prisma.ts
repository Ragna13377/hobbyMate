import { PrismaClient } from '@prisma/client';

// Vercel realization
let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	prisma = global.prisma;
}

export default prisma;

// Prisma realisation
// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
// export const prisma = globalForPrisma.prisma || new PrismaClient();
// if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
