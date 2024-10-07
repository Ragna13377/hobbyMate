import { PrismaClient } from '@prisma/client';
import countries from './seeds/countrySeed.json';
import hobbies from './seeds/hobbySeed.json';

const prisma = new PrismaClient();
const countrySeed = async () => {
	await prisma.country.createMany({ data: countries });
	await prisma.hobby.createMany({ data: hobbies })
};
countrySeed()
	.catch((e) => console.log(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
