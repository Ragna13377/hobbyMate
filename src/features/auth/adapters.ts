import prisma from '@shared/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';

export function CustomPrismaAdapter(p: typeof prisma) {
	return {
		...PrismaAdapter(p),
	};
}
