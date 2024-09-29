import { PrismaClient } from '@prisma/client';
import countries from './seeds/countrySeed.json';

const prisma = new PrismaClient();
const countrySeed = async () => {
	await prisma.country.createMany({ data: countries });
};
countrySeed()
	.catch((e) => console.log(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
